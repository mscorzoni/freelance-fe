import { Component } from '@angular/core';
import { Proposal } from './proposal'

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html' 
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http:/google.com', 'Ruby on Rails', 150, 120, 15, 'test@email.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http:/google.com', 'Ruby on Rails', 150, 120, 15, 'test@email.com')
  proposalThree: Proposal = new Proposal(300, 'XPTO Company', 'http:/google.com', 'Ruby on Rails', 150, 120, 15, 'test@email.com')

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}