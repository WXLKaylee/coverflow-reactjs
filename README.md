<img src="coverflow.gif" />

### params

| name      | type     | required | explain | defaultValue     |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| hasLabel     | boolean | false | Whether to include the 'label' parameters   | false    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| labelFontSize     | number | false  | Lable font size    | 14    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| items     | array | true  | Array of objects, coverflow items   | []    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| style     | object | false  | Component style   | {}    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| onClick     | function | false  | Click on the item's callback   | null    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| BoxWidth     | number | false  | The width of the container   | 100    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| BoxHeight     | number | false  | The height of the container   | 100    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| ItemWidth     | number | false  | The width of the img   | 100    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| ItemHeight     | number | false  | The height of the img   | 100    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| differWidth     | number | false  | The distance between items   | 40    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| differFromActive     | number | false  | Activeitem distance from left/right item   | 40    |

## items

 name      | type     | required | explain | defaultValue     
 ---------- | :-----------: | :-----------: | :-----------: | :-----------:
 id     | number | true | Mark item for click operation   | undefined    
 ---------- | :-----------: | :-----------: | :-----------: | :-----------: 
 src     | string | true  | Img url    | undefined    
 ---------- | :-----------: | :-----------: | :-----------: | :-----------: 
 className     | string | false  | Item calssname   | null    
 ---------- | :-----------: | :-----------: | :-----------: | :-----------: 
 label     | string | false  | Item label text  | null    

### Demo

<p><a href="https://wxlkaylee.github.io/coverflow-reactjs/">react coverflow example</a></p>


```
<Coverflow

  items={ items }
  
  style={ { margin: '0 auto', background: '#999' } }

  hasLabel boxWidth={ 500 } boxHeight={ 250 }

  itemWidth={ 120 } itemHeight={ 120 }

/>
```
