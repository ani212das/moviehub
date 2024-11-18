import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { result } from 'lodash';
import { MenuItem } from 'primeng/api';
import { UserDataService } from 'src/app/shared/services/user-data.service';
import { Router } from '@angular/router';
// import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  //   encapsulation: ViewEncapsulation.None, //this is use for global css add
})
export class MovieListComponent implements OnInit {
  userList: any[] = [];
  detaillist: any;

  constructor(
    private http: HttpClient,
    private userdata: UserDataService,
    private router: Router
  ) {}

  getDummyApi() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.userdata.detailpost().subscribe(
      (data) => {
        this.detaillist = data;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
    
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            separator: true,
          },
        ],
      },

      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
    ];
  }
  goToDetails() {
    this.router.navigate(['/details', this.detaillist.id]);  // এখানে movie.id ব্যবহার করে আইডি পাস করুন
  }
}
