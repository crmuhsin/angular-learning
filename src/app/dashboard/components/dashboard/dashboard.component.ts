import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  blogImg = 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
  headItems = [
    {iconColor: 'green', icon: 'credit_card', textTitle: '$12121', textPara: 'Income'},
    {iconColor: 'blue', icon: 'account_box', textTitle: '2690', textPara: 'Users'},
    {iconColor: 'purple', icon: 'date_range', textTitle: '20 March', textPara: 'My birthday'},
    {iconColor: 'red', icon: 'settings', textTitle: '6540', textPara: 'pending'}
  ];
  leftItems = [
    {iconColor: 'green', icon: 'credit_card', textTitle: 'Meeting Today', time: '5pm', textPara: 'you can write anything'},
    {iconColor: 'blue', icon: 'account_box', textTitle: 'Send documents to Clark', time: '', textPara: 'Lorem Ipsum is simply'},
    {iconColor: 'purple', icon: 'date_range', textTitle: 'John Doe', time: '5pm', textPara: 'Call today with gohn Doe'},
    {iconColor: 'red', icon: 'settings', textTitle: 'Go to the Doctor', time: '5 minutes ago', textPara: 'Contrary to popular belief'},
    {iconColor: 'red', icon: 'settings', textTitle: 'Tiger Sroff', time: '5 minutes ago', textPara: 'Approve meeting with tiger'}
  ];
  tableItems = [
    {name: 'Elite admin', status: 'sale', date: 'April 18, 2017', price: '24'},
    {name: 'Real Homes WP Theme', status: 'extended', date: 'April 19, 2017', price: '1250'},
    {name: 'Ample admin', status: 'extended', date: 'April 19, 2017', price: '1250'},
    {name: 'Medical Pro WP Theme', status: 'tax', date: 'April 20, 2017', price: '-24'},
    {name: 'Hosting press HTML', status: 'sale', date: 'April 21, 2017', price: '24'},
    {name: 'Digital Agency PSD', status: 'sale', date: 'April 23, 2017', price: '-14'},
    {name: 'Helping Hands WP Theme', status: 'member', date: 'April 22, 2017', price: '64'},
    {name: 'Ample Admin', status: 'extended', date: 'April 19, 2017', price: '1250'},
  ];
  budgetItems = [
    {iconColor: 'blue', devName: 'Sunil Joshi', designation: 'Web Developer', name: 'Elite admin', priority: 'low', budget: '$3.9K'},
    {iconColor: 'black', devName: 'Andrew', designation: 'Project Manager', name: 'Real Homes', priority: 'medium', budget: '$23.9K'},
    {iconColor: 'green', devName: 'Bhavesh patel', designation: 'Developer', name: 'Medical Pro Theme', priority: 'high', budget: '$12.9K'},
    {iconColor: 'orange', devName: 'Michael Doe', designation: 'Content Writer', name: 'Helping Hands WP Theme', priority: 'high', budget: '$12.9K'},
    {iconColor: 'red', devName: 'Jonathan', designation: 'Graphic', name: 'Digital Agency PSD', priority: 'high', budget: '$2.6K'},
  ];
  constructor() { }


  ngOnInit() {
  }

}
