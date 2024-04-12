import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs';
import * as tfn from '@tensorflow/tfjs-node';

import { PredictInputDto } from '@/modules/price/domains/dtos/request/predict-input.dto';

@Injectable()
export class PriceService {
  private model: tf.LayersModel;

  constructor() {
    this.loadModel();
  }

  private async loadModel() {
    const handler = tfn.io.fileSystem('@/../ai-model/model.json');
    this.model = await tf.loadLayersModel(handler);
  }

  vectorTransformation(inputs: PredictInputDto) {
    const tags = [
      'bedrooms',
      'bathrooms',
      'sqft_living',
      'sqft_lot',
      'floors',
      'waterfront',
      'view',
      'condition',
      'grade',
      'sqft_above',
      'sqft_basement',
      'yr_built',
      'yr_renovated',
      'lat',
      'long',
      'sqft_living15',
      'sqft_lot15',
      'year',
      'month',
    ];

    const vector = [];
    tags.map((tag) =>
      vector.push(
        isNaN(Number(inputs[tag]))
          ? tag.includes('yr_')
            ? 1900
            : 0
          : Number(inputs[tag]),
      ),
    );
    return tf.tensor([vector]);
  }

  async predict(inputs: PredictInputDto) {
    const predictTensor = this.model.predict(
      this.vectorTransformation(inputs),
    ) as tf.Tensor<tf.Rank>;

    return predictTensor.dataSync()[0];
  }
}
