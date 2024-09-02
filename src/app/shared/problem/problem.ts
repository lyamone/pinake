import { User } from "../../core/user/user";

export type ProblemStatus = 'deployed' | 'pending' | 'failed';

export interface ProblemObjData {
  name: string;
  reward: number;
  deadline: number;
  isSolved: boolean;
  isLocked: boolean;
}
export interface ProblemContractState {
  problem?: ProblemObjData,
  proponent?: string,
  totalBalance?: number,
}

export interface ProblemContract {
  address: string;
  txId?: string;
  status: ProblemStatus;
  deployedAt?: number;
  state?: ProblemContractState;
}

export interface ProblemChatMessage {
  id: string;
  createdAt: string;
  text: string;
  displayName: string;
}

export interface ProblemSolution {
  description:  string;
  createdAt: string;
  createdBy: User;
}

export interface Problem {
  id: string;
  title: string;
  references?: string[],
  description: string;
  createdBy: User;
  createdAt: any;
  updatedAt: any;
  solved: boolean;
  reward?: number;
  deadline?: number;
  contract?: ProblemContract;
  chat: ProblemChatMessage[];
  solutions: ProblemSolution[];
  verifiers: User[];
}
