### params

| name      | type     | required | explain | defaultValue     |
| ---------- | :-----------: | :-----------: | :-----------: |
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

| name      | type     | required | explain | defaultValue     |
| ---------- | :-----------: | :-----------: | :-----------: |
| id     | number | true | Mark item for click operation   | undefined    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| src     | string | true  | Img url    | undefined    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| className     | string | false  | Item calssname   | null    |
| ---------- | :-----------: | :-----------: | :-----------: | :-----------: |
| label     | string | false  | Item label text  | null    |

### Demo

<img src="coverflow.gif" />
<p>
  <a href="https://gewenmao.github.io/react-numboard/" rel="nofollow">react coverflow demo</a>
</p>
