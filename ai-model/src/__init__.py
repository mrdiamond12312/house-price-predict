import train

df = train.preprocessingData(train.CSV_DIR)

X_train, X_test, y_train, y_test = train.splitDataset(df)

model = train.annModel(X_train=X_train, X_test=X_test,
                       y_train=y_train, y_test=y_test, epochs=200, batch_size=32)

train.saveModel(model)
