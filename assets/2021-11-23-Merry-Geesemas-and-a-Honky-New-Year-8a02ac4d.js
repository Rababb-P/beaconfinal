const Z="data:text/markdown;base64,CkhhdmUgeW91IGV2ZXIgYmVlbiBhcHByb2FjaGVkIGJ5IGEgYmxvb2QtdGhpcnN0eSBnb29zZT8gSGF2ZSB5b3UgZXZlcgphY2NpZGVudGFsbHkgc3RlcHBlZCBpbiBhIG1vdW5kIG9mIHN0ZWFtaW5nIGhvdCBnb29zZSBleGNyZW1lbnQ/IEhhdmUKeW91IGV2ZXIgYmVlbiBnbGFyZWQgYXQgYnkgYSBnb29zZSBzdGFuZGluZyBvbiB0b3Agb2YgdGhlIHNjaG9vbCwgYW5kCmZlYXJlZCBmb3IgeW91ciBsaWZlPyBCdXQsIG1vc3QgaW1wb3J0YW50bHkuLi4KCkhhdmUgeW91IGV2ZXIgd29uZGVyZWQgd2hhdCB0aGUgTUNJIGdlZXNlIGRvIG92ZXIgd2ludGVyIGJyZWFrPwoKV2VsbCwgd29uZGVyIG5vIG1vcmUhICpUaGUgQmVhY29uKiBpcyBoZXJlIHdpdGggeW91ciBpbnNpZGUgc2Nvb3Agb24gdGhlCndpbnRlciBtaWdyYXRpb24gcGF0dGVybnMgb2YgQ2FuYWRhIEdlZXNlLgoKU29tZSBOb3J0aCBBbWVyaWNhbiBDYW5hZGEgR2Vlc2UgbWlncmF0ZSBzb3V0aCBmb3IgdGhlIHdpbnRlciBzZWFzb24sCmxhbmRpbmcgaW4gc291dGhlcm4gYWdyaWN1bHR1cmFsIGFyZWFzIGluIHRoZSBVbml0ZWQgU3RhdGVzLiBPdXIgTUNJCmdlZXNlLCBob3dldmVyLCBsaXZlIGluIHdoYXQgaXMga25vd24gYXMgYSB5ZWFyLXJvdW5kIHJhbmdlLCBtZWFuaW5nCnRoZXkgZG9uJ3QgaGF2ZSB0byBtaWdyYXRlIHRvIHN0YXkgd2FybSBpbiB0aGUgd2ludGVyLiBJZiB5b3UgaGF2ZQpub3RpY2VkIGEgcGFydGljdWxhciBnb29zZXkgcHJlc2VuY2UgZXZlbiBhcyB0aGUgd2VhdGhlciBoYXMgZ290dGVuCmNvbGRlciwgdGhhdOKAmXMgd2h5IQoKV2Ugc3Bva2UgdG8gTmFtZWxlc3MgR29vc2UgXCM1Nywgd2hvIHdpbGwgYmUgcmVmZXJyZWQgdG8gYXMgR2VyYWxkaW5lLAphYm91dCBoZXIgZXhwZXJpZW5jZSBzcGVuZGluZyBoZXIgaG9saWRheSBzZWFzb24gcmlnaHQgaGVyZSBhdCBNQ0kuCgoiSE9OSyEiIEdlcmFsZGluZSBleGNsYWltZWQsIGJlZm9yZSBmbGFwcGluZyBoZXIgd2luZ3MgYWdncmVzc2l2ZWx5IGFuZApzY3V0dGxpbmcgYXdheS4KCk15IGtub3dsZWRnZSBvZiB0aGUgQ2FuYWRpYW4gZGlhbGVjdCBvZiBHb29zZSBpcyBub3QgZW5vdWdoIHRvCnVuZGVyc3RhbmQgd2hhdCBHZXJhbGRpbmUgc28gYmVsbGlnZXJlbnRseSBob25rZWQsIGJ1dCBzaGUgYW5kIGhlciBnb29zZQpmcmllbmRzIHNlZW0gdG8gbGlrZSBpdCBoZXJlLCBzbyB3ZSBjYW4gaW50ZXJwcmV0IHRoYXQgaG9uayBhcyBhIGhhcHB5Cm9uZS4gTWFueSBDYW5hZGEgR2Vlc2UgZW5qb3kgZ3JhemluZyBvbiBmbGF0IHN0cmV0Y2hlcyBvZiBncmFzcyAsIG5vdAp1bmxpa2UgdGhlIGZpZWxkcyBhbmQgbGF3bnMgb2YgTUNJLCB3aGVyZSB0aGV5IGNhbiBlYXQgdGhpbmdzIGxpa2UKbGVhdmVzIGFuZCByb290cy4gU2luY2UgdGhlIHBsYW50cyBlYXRlbiBieSBvdXIgZmVhdGhlcmVkIGZyaWVuZHMgYXJlCm5vdCB2ZXJ5IG51dHJpdGlvdXMsIHRoZXkgY2FuIHNwZW5kIGFyb3VuZCAxMiBob3VycyBwZXIgZGF5IGVhdGluZywKd2hpY2ggaXMgd2h5IHlvdSBtaWdodCBub3RpY2UgQ2FuYWRhIEdlZXNlIChhbmQgdGhlaXIgZHJvcHBpbmdzKSBvbiB0aGUKZmllbGQgYW5kIGxhd25zIHF1aXRlIGZyZXF1ZW50bHkuCgpJbiBjb25jbHVzaW9uLCBzb21lIENhbmFkYSBHZWVzZSBtaWdyYXRlIHNvdXRoIGZvciB0aGUgd2ludGVyLCBidXQgb3VycwphcmUgbGlrZWx5IHRvIHN0YXkgcmlnaHQgYXQgaG9tZSEKCkEgdmVyeSBNZXJyeSBHZWVzZW1hcyBhbmQgYSBIb25reSBOZXcgWWVhciBmcm9tIGFsbCB0aGUgZ2Vlc2UgYXQgTUNJIQoKSW1hZ2UgdGFrZW4gYnkgWypOYXlhYiBOYXZlZWQqXShodHRwczovL21jaWJlYWNvbi5jb20vbWVtYmVyL25heWFiLW5hdmVlZCkK";export{Z as default};