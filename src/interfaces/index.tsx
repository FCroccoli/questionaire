export interface iQuestion {
  text: string;
  alternatives: Array<iAlternative>;
}

export interface iAlternative {
  text: string;
  isCorrect: boolean;
}

export interface iAnswer {
  selectedAlternative: number;
  isCorrect: boolean;
}
