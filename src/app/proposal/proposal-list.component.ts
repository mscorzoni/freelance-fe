import { Component } from '@angular/core';
import { Proposal } from './proposal'

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http:/google.com', 'Ruby on Rails', 24, 120, 15, 'test@email.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http:/google.com', 'Ruby on Rails', 36, 120, 15, 'test@email.com')
  proposalThree: Proposal = new Proposal(300, 'XPTO Company', 'http:/google.com', 'Ruby on Rails', 14, 120, 15, 'test@email.com')

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}