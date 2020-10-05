import { LightningElement } from 'lwc';

export default class URLChanger extends LightningElement {
    count = 1;

    handleClick(event) {
        history.replaceState(null, '', `?paremeter=${this.count}`);
        this.count++;
    }
}