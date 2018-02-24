import { TestBed, inject } from '@angular/core/testing';

import { CardPaymentService } from './card-payment.service';

describe('CardPaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardPaymentService]
    });
  });

  it('should be created', inject([CardPaymentService], (service: CardPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
