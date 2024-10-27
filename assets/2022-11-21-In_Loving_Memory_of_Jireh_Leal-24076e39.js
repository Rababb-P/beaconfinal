const G="data:text/markdown;base64,DQoNCkFzIG1hbnkgb2YgeW91IG1heSBrbm93LCBlYXJsaWVyIHRoaXMgc2VtZXN0ZXIsIHdlIGxlYXJuZWQgb2YgdGhlIHRyYWdpYw0KbmV3cyBvZiBKaXJlaCBNYW5vc2NhIExlYWzigJlzIHBhc3Npbmcgb24gT2N0b2JlciAxMiwgMjAyMi4gVGhpcyBtYWRlIGFuZA0Kc3RpbGwgY29udGludWVzIHRvIG1ha2UgYSBiaWcgaW1wYWN0IG9uIGFsbCB3aG8ga25ldyBoZXIuIEppcmVoIHdhcyBhDQpraW5kLCBjYXJpbmcsIGFuZCBnZW5lcm91cyBzaXN0ZXIsIGRhdWdodGVyLCBhbmQgZnJpZW5kLiBTaGUgd2FzIGtub3duDQp0byBjcmVhdGUgYSBmcmllbmRseSBlbnZpcm9ubWVudCBhbmQgaGF2ZSBhIHBvc2l0aXZlIGluZmx1ZW5jZSBvbiB0aG9zZQ0KYXJvdW5kIGhlci4gSmlyZWggd2FzIGFsd2F5cyBzdXBwb3J0aXZlIG9mIGFueW9uZSwgbm8gbWF0dGVyIHdobyB0aGV5DQp3ZXJlLCBldmVuIGlmIHNoZSBkaWQgbm90IGtub3cgdGhlbS4gU2hlIHdhcyBhbHNvIGFuIGFtYXppbmcgbGVhZGVyIGF0DQpjaHVyY2guIEl0IHdvdWxkIG5vdCBtYXR0ZXIgd2hlcmUgc2hlIHdhcyBvciB3aG8gc2hlIHdhcyB3aXRoLCBzaGUgd291bGQNCmFsd2F5cyBzaG93IGZyaWVuZGxpbmVzcyBhbmQgd2FzIGFsd2F5cyBhcHByb2FjaGFibGUuIFNoZSB3YXMgYWx3YXlzDQphZG1pcmVkIGZvciBoZXIgaW5pdGlhdGl2ZSwgY28tb3BlcmF0aW9uLCBhbmQgcGVyc2V2ZXJhbmNlIGluIGFueQ0Kc2l0dWF0aW9uLiBBdCBNYXJ0aW5ncm92ZSBDb2xsZWdpYXRlIEluc3RpdHV0ZSwgc2hlIGhhZCBiZWNvbWUgY2xvc2UNCndpdGggbWFueS4gSmlyZWjigJlzIHRlYWNoZXJzIGFuZCBmcmllbmRzIGhhdmUgc2hhcmVkIG1hbnkgZm9uZCBtZW1vcmllcw0Kb2YgaGVyLiBIZXJlIGlzIHdoYXQgdGhleSBoYWQgdG8gc2F5Og0KPGJyPjxicj4NCuKAnEl04oCZcyBiZWVuIGEgcHJpdmlsZWdlIHRvIHRlYWNoIHR3byBtZW1iZXJzIG9mIHRoZSBMZWFsIGZhbWlseS4gSQ0KdGhvdWdodCB2ZXJ5IGhpZ2hseSBvZiB0aGUgYm9uZCBiZXR3ZWVuIEphaSBhbmQgSnVkYWgsIGFuZCBoYXZpbmcgdGhlbQ0KYm90aCBpbiB0aGUgc2FtZSBjbGFzcyB0aGlzIHllYXIgZ2F2ZSBtZSBhIGZyb250IHNlYXQgdG8gYSBsb3ZpbmcsDQppbmNyZWR1bG91cywgc2FmZWd1YXJkZWQgcmVsYXRpb25zaGlwIG9ubHkgc2libGluZ3MgY2FuIGhhdmUuIFNoZSBzaG93ZWQNCmhlYXJ0IGluIGJvdGggaGVyIGNhcmUgZm9yIGhlciBtdXNpY2FsIGNyYWZ0LCBhbmQgdGhlIGNvbm5lY3Rpb25zIHNoZQ0KY3VsdGl2YXRlZCB3aXRoIHRob3NlIGFyb3VuZCBoZXIsIGFuZCBJIGNvdW50IG15c2VsZiBzbyBibGVzc2VkIHRvIGJlIGluDQp0aG9zZSBudW1iZXJzLuKAnSAtIE1zLiBKLiBDaGFuZw0KPGJyPjxicj4NCuKAnEkgd2lsbCBhbHdheXMgcmVtZW1iZXIgSmlyZWggYXMgYSBicmlnaHQgYW5kIGtpbmQgc3R1ZGVudCB3aXRoIGENCmJlYXV0aWZ1bCBzbWlsZS4gSSB3YXMgc28gcHJvdWQgb2YgaGVyIGFzIGEgYmx1ZSBjYW1wZXIgdXAgYXQgTWFuaXRvdQ0KbGFzdCBtb250aOKAlCBoZXIgaW5jcmVkaWJsZSBlbmVyZ3ksIHN1cHBvcnQsIGFuZCBob25lc3R5IHN0cmVuZ3RoZW5lZCB0aGUNCmJvbmRzIGFuZCBzZW5zZSBvZiBjb21tdW5pdHkgdGhhdCB0aGV5IGJ1aWx0IHVwIGF0IGNhbXAuIFNoZSB3aWxsIGJlDQptaXNzZWQu4oCdIC0gTXMuIFMuIExpbWENCjxicj48YnI+DQrigJxKaXJlaCB3YXMgYSBsb3Qgb2YgZ29vZCB0aGluZ3MsIGJ1dCBtb3N0IG9mIGFsbCwgYSB3b25kZXJmdWwgZnJpZW5kLiBJDQp0cnVseSBjb3VsZG7igJl0IGhhdmUgYXNrZWQgZm9yIGFueXRoaW5nIG1vcmUgZnJvbSBoZXIgYXMgYSBmcmllbmQsIGFuZA0KSeKAmW0gZ3JhdGVmdWwgYmV5b25kIGJlbGllZiBmb3IgaGVyIGJlaW5nIHRoZXJlIGZvciBtZS7igJ0gLSBSdWRpIE1hdGFqDQo8YnI+PGJyPg0K4oCcSmlyZWggd2FzIGFuIGFtYXppbmcgcGVyc29uLiBTaGUgbGl0IHVwIG15IGRheSB3aXRoIGp1c3QgaGVyIGNoZWVyZnVsDQpzbWlsZSwgaG93IHdlIGdyZWV0IGVhY2ggb3RoZXIgaW4gdGhlIG1vcm5pbmcuIFNoZSB3YXMgYWxzbyBteSBzcG9ydHMNCmJ1ZGR5LiBTaGUgd2FzIHNvIHRhbGVudGVkIGluIGV2ZXJ5IHNwb3J0LCBlc3BlY2lhbGx5IHZvbGxleWJhbGwuIEl0IHdhcw0Kc3VjaCBhbiBob25vciBiZWluZyBjbG9zZSB0byBoZXIuIFRoYW5rcyBKYWku4oCdIC0gVml2aWFuIERvDQo8YnI+PGJyPg0K4oCcSmFpIGNvdWxkIGRvIGFueXRoaW5nISBMaWtlIHNpbmdpbmcsIGRhbmNpbmcsIHBsYXlpbmcgaW5zdHJ1bWVudHMsDQptYWtpbmcgc3R1ZmYsIGFydHMsIHNwb3J0cywgc2hlIHdhcyBhbiBhYnNvbHV0ZSBnb2xkZW4gY2hpbGQgYXQNCmV2ZXJ5dGhpbmcgc2hlIGRpZC4gV2hpbGUgc2hlIGRpZCB0ZW5kIHRvIGxvc2Ugc2xlZXAgZm9yIGl0LCBJ4oCZdmUgYWx3YXlzDQpiZWVuIHByb3VkIG9mIGhvdyB0YWxlbnRlZCBzaGUgaXMgYW5kIHNoZeKAmXMgZGVmaW5pdGVseSBiZWVuIGEgcGVyc29uDQpJ4oCZdmUgbG9va2VkIHVwIHRvIGJlY2F1c2Ugc2hl4oCZcyBzbyBhbGwgcm91bmRlZC7igJ0gLSBLYXZpbmF5YQ0KVmlqYXlhdGhhcnNhbg0KPGJyPjxicj4NCuKAnEkgbG92ZWQgeW91ciBsYXVnaCBhbmQgeW91ciBmdW5ueSBqb2tlcy4gSSBsb3ZlZCBob3cgeW91IGRpZG7igJl0IGNhcmUNCmFib3V0IHdoYXQgb3RoZXIgcGVvcGxlIHRob3VnaHQuIEkgbG92ZWQgaG93IGNhcmluZyBhbmQgbG92aW5nIHlvdSB3ZXJlDQp0b3dhcmRzIG1lLiBXZSBiZWxpZXZlZCB3ZSB3ZXJlIHBsYXRvbmljIHNvdWxtYXRlcy4gTWF5YmUgdGhhdOKAmXMgd2h5IGhlcg0KZGVhdGggaHVydHMgc28gbXVjaOKAnSAtIEFuaXNhIEtyYXNuaXFpDQo8YnI+PGJyPg0KSmlyZWjigJlzIGRlYXRoIGhhcyBpbXBhY3RlZCB1cyB2ZXJ5IG11Y2ggYW5kIGl0IHdvdWxkIGJlIHZlcnkgaGVscGZ1bCBpbg0KdGhlIGRpZmZpY3VsdCB0aW1lcyB0byBzdXBwb3J0IHRob3NlIHdobyB3ZXJlIGNsb3NlIHRvIGhlciBhcyB3ZWxsIGFzDQpsb29rIHRvIHJlY2VpdmUgc3VwcG9ydC4NCjxicj48YnI+DQpUYWxraW5nIHRvIGZyaWVuZHMgYW5kIGZhbWlseSBjYW4gbWFrZSB0aGUgbW91cm5pbmcgZWFzaWVyLiBGb3IgcGFyZW50cywNCmJlaW5nIHRoZXJlIGZvciB5b3VyIGNoaWxkcmVuIGJ5IHNpdHRpbmcgZG93biwgbGlzdGVuaW5nLCBhY2tub3dsZWRnaW5nLA0KYXMgd2VsbCBhcyBjb21tdW5pY2F0aW5nIGNhbiBiZSB2ZXJ5IGhlbHBmdWwgaW4gdGhlIGdyaWV2aW5nIHByb2Nlc3MuDQpDaGVjayB1cCBvbiB0aGVtIGV2ZXJ5IG9uY2UgaW4gYSB3aGlsZSB0byBzZWUgaG93IHRoZXkgYXJlIGRlYWxpbmcgd2l0aA0KdGhlIHNpdHVhdGlvbiBhbmQgbWFrZSBzdXJlIHRvIGxldCB0aGVtIGtub3cgdGhhdCB5b3UgYXJlIGFsd2F5cyB0aGVyZQ0KdG8gc3VwcG9ydCB0aGVtLiBJZiB5b3XigJlyZSB1bmFibGUgdG8gdGFsayB0byBwZWVycyBvciBwYXJlbnRzL2d1YXJkaWFucywNCnRhbGtpbmcgdG8gYSBjb3Vuc2Vsb3Igb3IgdGhlcmFwaXN0IGNhbiBiZSBoZWxwZnVsIHRvby4gU2Nob29sDQpjb3Vuc2Vsb3JzIHdpbGwgYWx3YXlzIGJlIHRoZXJlIGF0IHNjaG9vbCB0byBoZWxwIHlvdSBnZXQgdGhyb3VnaCB0aGUNCnNpdHVhdGlvbi4NCjxicj48YnI+DQpTaGUgd2lsbCBiZSByZW1lbWJlcmVkIGFuZCBsb3ZlZCBmb3IgdGhlIGluZmx1ZW5jZSBzaGUgaGFkIG9uIGV2ZXJ5b25lLg0KDQpPY3RvYmVyIDExLCAyMDA3LSBPY3RvYmVyIDEyLCAyMDIyLg0KDQpNYXkgc2hlIHJlc3QgaW4gcGVhY2UuDQo=";export{G as default};