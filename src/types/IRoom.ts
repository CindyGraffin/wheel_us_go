type WheelAperoType = {
    setUp: boolean;
    launched: boolean;
    person?: string;
}

type Dresscode = {
    setUp: boolean;
    description?: string;
}

export type IRoom = {
    _id: string;
    creatorId: string;
    placeName: string;
    address: string;
    date: Date;
    partIds: [any];
    theme: string;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
}