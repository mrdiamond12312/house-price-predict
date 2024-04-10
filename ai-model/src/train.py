import seaborn as sns
import matplotlib.pyplot as plt

# Data Processing Frameworks
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import preprocessing

# Data Modeling Frameworks
import tensorflow as tf
from tensorflow import feature_column

from keras.models import Sequential
from keras.layers import Dense, Dropout

import pathlib

CSV_DIR = "./src/kc_house_data.csv"

def preprocessingData(datasetDir):
    dataframe = pd.read_csv(CSV_DIR)

    dataframe = dataframe[(dataframe['price'] > 0) & (dataframe['price'] <= 3000000) & (dataframe['sqft_living'] < 8000)]

    dataframe['yr_renovated'] = dataframe[['yr_renovated', 'yr_built']].max(axis=1)

    dataframe.dropna()

    # Processing time column
    dataframe['year'] = pd.DatetimeIndex(dataframe['date']).year
    dataframe['month'] = pd.DatetimeIndex(dataframe['date']).month


    dataframe.drop(['id', 'zipcode', 'date'], axis=1, inplace=True)

    return dataframe

def splitDataset(dataframe):
    targetColumn=dataframe['price']
    features = dataframe.iloc[:,1:20]

    # Split dataset
    X=features
    scaler = preprocessing.StandardScaler()
    X_scale = scaler.fit_transform(X)

    y=np.ravel(targetColumn)

    X_train, X_test, y_train, y_test = train_test_split(X_scale, y, test_size=0.3, random_state=100)

    return (X_train, X_test, y_train, y_test)

def annModel(X_train, X_test, y_train, y_test, epochs, batch_size):
    model = Sequential()
    model.add(Dense(19, activation='relu', input_shape=(19,)))
    # model.add(Dropout(0.1))
    model.add(Dense(19, activation='relu'))
    # model.add(Dropout(0.1))
    model.add(Dense(19, activation='relu'))
    # model.add(Dropout(0.1))
    model.add(Dense(19, activation='relu'))
    # model.add(Dropout(0.1))
    model.add(Dense(1))
    model.compile(optimizer='adam',loss='mse')
    model.fit(X_train, y_train,epochs=epochs, batch_size=batch_size, validation_data=(X_test, y_test))

    return model

def saveModel(model):
    model.save('./model.h5')
