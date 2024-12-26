export default interface ElectionCreationResponse {
  id: string;
  name: string;
  nominationTime: number;
  nominationTimeUnit: string;
  votingTime: number;
  votingTimeUnit: string;
  createdAt: string;
  updatedAt: string;
}