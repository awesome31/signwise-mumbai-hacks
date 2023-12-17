export type KeyRisk = string;

export interface Party {
  partyName: string;
  partyType: string;
  partyRisk: 'Low' | 'Medium' | 'High'; // Adjust risk levels as needed
  keyRisks: KeyRisk[];
}

export interface AnalysisReport {
  title: string;
  natureOfDocument: string;
  keyHighlights: string[];
  parties: Party[];
  adviceCategory: string[];
}

export interface Lawyer {
  name: string;
  qualification: string;
  expertise: string[];
  consultedCount: number;
  yearsOfExperience: number;
  description: string;
  image: string;
  phoneNumber: string;
  tariff: number;
  status: string;
  languages: string[];
}

export type KeyRiskData = {
  riskName: string;
  riskDescription: string;
  riskRating: 'High' | 'Very High';
  riskExplanation: string;
  riskMitigation: string;
};

export type CreditCardHolder = {
  partyName: string;
  partyType: 'User';
  partyRisk: 'Medium';
  keyRisks: KeyRiskData[];
};
