import { Component, ElementRef, AfterViewInit, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-address-search-bar',
  templateUrl: './address-search-bar.component.html',
  styleUrls: ['./address-search-bar.component.css']
})
export class AddressSearchBarComponent implements AfterViewInit {
  @ViewChild('search')
  public searchElementRef!: ElementRef;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        // Print Found Location
        console.log({ place }, place.geometry.location?.lat());
      });
    });
  }
}
