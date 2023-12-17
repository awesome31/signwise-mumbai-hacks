import {Lawyer} from '../../types';

export interface LawyerCardProps extends Lawyer {
  onViewProfile: () => void;
  onConsultNow: () => void;
}
