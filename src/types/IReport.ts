interface ReportUser {
    userId: string;
    firstname: string;
    lastname: string;
    email: string;
}

export default interface IReport {
    _id: string;
    userId: string;
    category: string;
    reportBy: ReportUser;
    comment: string;
    messageDetailsId?: string;
    createdAt?: Date;
}
