import { Component } from '@angular/core'

@Component({
  selector: 'my-inner-html',
  inputs:['htmlStr'],
  styles: [
    ':host >>> h1{color: #009abe;font-family: sans-serif;}',
    ':host >>> h2{color: #009abe;font-family: sans-serif;}',
    ':host >>> p{font-family: sans-serif;}',
    ':host >>> .capa{height: 800px;width: 600px;}',
    ':host >>> table{border: 3px solid #009abe;color: #3d3d3d;border-collapse: collapse; width: 100%;}',
    ':host >>> td{border: 3px solid #009abe;color: #3d3d3d;font-family: sans-serif;height: 50px;}',
    ':host >>> th{border: 3px solid #009abe;color: #3d3d3d;font-family: sans-serif;height: 50px;background-color: #c4e7ff;}',
    ':host >>> .title-table{background-color: #009abe; color: #ffffff}'
    ],
  template: '<div [innerHTML]="htmlStr"></div>'
})
export class InnerView {
  htmlStr:string;
}