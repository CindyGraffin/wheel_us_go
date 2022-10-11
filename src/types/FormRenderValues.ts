type WheelAperoType = {
  setUp: boolean;
  launched: boolean;
  person?: string;
};

type Dresscode = {
  setUp: boolean;
  description?: string;
};

export type FormRenderValues = {
  placeName: string;
  address: string;
  date: Date;
  partsIds: unknown;
  theme: string;
  aperoWheel: WheelAperoType;
  dresscode: Dresscode;
};
