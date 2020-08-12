import { Component } from '@angular/core';
import { select,Store } from '@ngrx/store'
import {CountState } from './reducers/count/count.reducer'
import {Observable} from 'rxjs'
import {selectCount,selectUpdatedAt} from './reducers/count/count.selectors'
import {CountActions,CountIncreaseAction,CountDecreaseAction,CountClearAction} from './reducers/count/count.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';

  public count$:Observable<number> = this.store$.pipe(select(selectCount))
  public updatedAt$:Observable<number> = this.store$.pipe(select(selectUpdatedAt))


  constructor(private store$:Store<CountState>){}

  increase(){
    this.store$.dispatch(new CountIncreaseAction())
  }

  decrease(){
    this.store$.dispatch(new CountDecreaseAction())
  }

  clear(){
    this.store$.dispatch(new CountClearAction())
  }
}
