interface Developer<feature, Y = null> {
  name: string;
  salary: number;
  isMarried: boolean;
  device: {
    brand: string;
    model: string;
    releaseDate: number;
  };
  smartWatch?: {
    brand: string;
    model: string;
    price: number;
    features?: feature;
  };
  other?: Y;
}
type PoorSmartWatchFeature = {
  heartRate: string;
  calculator: boolean;
};
type RichSmartWatchFeature = {
  heartRate: string;
  calculator: boolean;
};
const poorDev: Developer<PoorSmartWatchFeature> = {
  name: "Mr. Poor",
  salary: 10000,
  isMarried: false,
  device: {
    brand: "star_ex",
    model: "wer",
    releaseDate: 2025,
  },
  smartWatch: {
    model: "sdf",
    brand: "sdf",
    price: 1200,
    features: { calculator: false, heartRate: "100 BPM" },
  },
};

const richDev: Developer<
  RichSmartWatchFeature,
  { saving: number; isHappy: boolean }
> = {
  name: "Mr. rich",
  salary: 100000,
  isMarried: true,
  device: {
    brand: "high",
    model: "big",
    releaseDate: 2050,
  },
};