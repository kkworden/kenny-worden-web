export default interface ElectionCreationRequest {
  name: string;
  nominationTime: number;
  nominationTimeUnit: string;
  votingTime: number;
  votingTimeUnit: string;
}