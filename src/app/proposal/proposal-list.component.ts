import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Observable } from 'rxjs';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css'],
  providers: [ ProposalService ]
})

export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
   errorMessage: string;
  mode = "Observable";

  constructor(
    private proposalService: ProposalService,
    private router: Router, 
    ){}

  ngOnInit(){
    let timer1 = timer(0, 5000);
    timer1.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
      .subscribe(
        proposals => this.proposals = proposals,
        error => this.errorMessage = <any>error
        );
  }

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }
}