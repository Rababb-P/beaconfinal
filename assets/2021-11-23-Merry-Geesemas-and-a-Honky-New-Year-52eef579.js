const G="data:text/markdown;base64,DQpIYXZlIHlvdSBldmVyIGJlZW4gYXBwcm9hY2hlZCBieSBhIGJsb29kLXRoaXJzdHkgZ29vc2U/IEhhdmUgeW91IGV2ZXINCmFjY2lkZW50YWxseSBzdGVwcGVkIGluIGEgbW91bmQgb2Ygc3RlYW1pbmcgaG90IGdvb3NlIGV4Y3JlbWVudD8gSGF2ZQ0KeW91IGV2ZXIgYmVlbiBnbGFyZWQgYXQgYnkgYSBnb29zZSBzdGFuZGluZyBvbiB0b3Agb2YgdGhlIHNjaG9vbCwgYW5kDQpmZWFyZWQgZm9yIHlvdXIgbGlmZT8gQnV0LCBtb3N0IGltcG9ydGFudGx5Li4uDQoNCkhhdmUgeW91IGV2ZXIgd29uZGVyZWQgd2hhdCB0aGUgTUNJIGdlZXNlIGRvIG92ZXIgd2ludGVyIGJyZWFrPw0KDQpXZWxsLCB3b25kZXIgbm8gbW9yZSEgKlRoZSBCZWFjb24qIGlzIGhlcmUgd2l0aCB5b3VyIGluc2lkZSBzY29vcCBvbiB0aGUNCndpbnRlciBtaWdyYXRpb24gcGF0dGVybnMgb2YgQ2FuYWRhIEdlZXNlLg0KDQpTb21lIE5vcnRoIEFtZXJpY2FuIENhbmFkYSBHZWVzZSBtaWdyYXRlIHNvdXRoIGZvciB0aGUgd2ludGVyIHNlYXNvbiwNCmxhbmRpbmcgaW4gc291dGhlcm4gYWdyaWN1bHR1cmFsIGFyZWFzIGluIHRoZSBVbml0ZWQgU3RhdGVzLiBPdXIgTUNJDQpnZWVzZSwgaG93ZXZlciwgbGl2ZSBpbiB3aGF0IGlzIGtub3duIGFzIGEgeWVhci1yb3VuZCByYW5nZSwgbWVhbmluZw0KdGhleSBkb24ndCBoYXZlIHRvIG1pZ3JhdGUgdG8gc3RheSB3YXJtIGluIHRoZSB3aW50ZXIuIElmIHlvdSBoYXZlDQpub3RpY2VkIGEgcGFydGljdWxhciBnb29zZXkgcHJlc2VuY2UgZXZlbiBhcyB0aGUgd2VhdGhlciBoYXMgZ290dGVuDQpjb2xkZXIsIHRoYXTigJlzIHdoeSENCg0KV2Ugc3Bva2UgdG8gTmFtZWxlc3MgR29vc2UgXCM1Nywgd2hvIHdpbGwgYmUgcmVmZXJyZWQgdG8gYXMgR2VyYWxkaW5lLA0KYWJvdXQgaGVyIGV4cGVyaWVuY2Ugc3BlbmRpbmcgaGVyIGhvbGlkYXkgc2Vhc29uIHJpZ2h0IGhlcmUgYXQgTUNJLg0KDQoiSE9OSyEiIEdlcmFsZGluZSBleGNsYWltZWQsIGJlZm9yZSBmbGFwcGluZyBoZXIgd2luZ3MgYWdncmVzc2l2ZWx5IGFuZA0Kc2N1dHRsaW5nIGF3YXkuDQoNCk15IGtub3dsZWRnZSBvZiB0aGUgQ2FuYWRpYW4gZGlhbGVjdCBvZiBHb29zZSBpcyBub3QgZW5vdWdoIHRvDQp1bmRlcnN0YW5kIHdoYXQgR2VyYWxkaW5lIHNvIGJlbGxpZ2VyZW50bHkgaG9ua2VkLCBidXQgc2hlIGFuZCBoZXIgZ29vc2UNCmZyaWVuZHMgc2VlbSB0byBsaWtlIGl0IGhlcmUsIHNvIHdlIGNhbiBpbnRlcnByZXQgdGhhdCBob25rIGFzIGEgaGFwcHkNCm9uZS4gTWFueSBDYW5hZGEgR2Vlc2UgZW5qb3kgZ3JhemluZyBvbiBmbGF0IHN0cmV0Y2hlcyBvZiBncmFzcyAsIG5vdA0KdW5saWtlIHRoZSBmaWVsZHMgYW5kIGxhd25zIG9mIE1DSSwgd2hlcmUgdGhleSBjYW4gZWF0IHRoaW5ncyBsaWtlDQpsZWF2ZXMgYW5kIHJvb3RzLiBTaW5jZSB0aGUgcGxhbnRzIGVhdGVuIGJ5IG91ciBmZWF0aGVyZWQgZnJpZW5kcyBhcmUNCm5vdCB2ZXJ5IG51dHJpdGlvdXMsIHRoZXkgY2FuIHNwZW5kIGFyb3VuZCAxMiBob3VycyBwZXIgZGF5IGVhdGluZywNCndoaWNoIGlzIHdoeSB5b3UgbWlnaHQgbm90aWNlIENhbmFkYSBHZWVzZSAoYW5kIHRoZWlyIGRyb3BwaW5ncykgb24gdGhlDQpmaWVsZCBhbmQgbGF3bnMgcXVpdGUgZnJlcXVlbnRseS4NCg0KSW4gY29uY2x1c2lvbiwgc29tZSBDYW5hZGEgR2Vlc2UgbWlncmF0ZSBzb3V0aCBmb3IgdGhlIHdpbnRlciwgYnV0IG91cnMNCmFyZSBsaWtlbHkgdG8gc3RheSByaWdodCBhdCBob21lIQ0KDQpBIHZlcnkgTWVycnkgR2Vlc2VtYXMgYW5kIGEgSG9ua3kgTmV3IFllYXIgZnJvbSBhbGwgdGhlIGdlZXNlIGF0IE1DSSENCg0KSW1hZ2UgdGFrZW4gYnkgWypOYXlhYiBOYXZlZWQqXShodHRwczovL21jaWJlYWNvbi5jb20vbWVtYmVyL25heWFiLW5hdmVlZCkNCg==";export{G as default};