const G="data:text/markdown;base64,DQoNCkRpd2FsaSBpcyBhbiBhdXNwaWNpb3VzIEhpbmR1IGZlc3RpdmFsLCBhbHNvIGtub3duIGFzIHRoZSDigJxmZXN0aXZhbCBvZg0KbGlnaHRzLOKAnSBjZWxlYnJhdGluZyB0aGUgcmV0dXJuIG9mIEtpbmcgUmFtYSBhZnRlciBkZWZlYXRpbmcgdGhlIGV2aWwNClJhdmFuYS4NCjxicj48YnI+DQpPbiBXZWRuZXNkYXkgT2N0b2JlciAyNnRoLCBNQ0nigJlzIFNvdXRoIEFzaWFuIEN1bHR1cmFsIEFzc29jaWF0aW9uIChTQUNBKQ0Kc2hhcmVkIGEgcGllY2Ugb2YgdGhlaXIgY3VsdHVyZSB3aXRoIHVzIGJ5IG9yZ2FuaXppbmcgYSBzYW1vc2Egc2FsZSBhbmQNCmhlbm5hIGJvb3RoLg0KPGJyPjxicj4NClRoZSBsaW5lIGV4dGVuZGVkIGZyb20gdGhlIHBhcmtpbmcgbG90IGVudHJhbmNlIGRvb3JzIGluIHRoZSBmb3llciB0bw0KdGhlIEJlYXIncyBEZW4uIFN0dWRlbnRzIGZhY2VkIHRoZSByaXNrIG9mIGJlaW5nIHRyYW1wbGVkIG92ZXIgYnkgdGhlDQpyZXN0bGVzc2x5IGh1bmdyeSBjcm93ZC4gTm9uZXRoZWxlc3MsIHRoZXkgcHJpb3JpdGl6ZWQgdGhlIHNhbW9zYXMgb3Zlcg0KdGhlbXNlbHZlcy4NCjxicj48YnI+DQpXZXJlIHRoZSBTYW1vc2FzIFdvcnRoIEl0Pw0KPGJyPjxicj4NCkFzIGEgbGlmZXRpbWUgSW5kaWFuLCBJIGdpdmUgdGhpcyBzYW1vc2EgbXkgc3RhbXAgb2YgYXBwcm92YWwuIFRoZXNlDQpzYW1vc2FzIHBlcmZlY3RseSBiYWxhbmNlIHRoZSBzcGljZXMsIGFuZCB0aGUgdmVnZ2llcyB0byBwb3RhdG8gcmF0aW8sDQpjYXB0dXJpbmcgdGhlIHRhc3RlIGFuZCB0aGUgZXNzZW5jZSBvZiBhbiBhdXRoZW50aWMgdmVyc2lvbiBvZiB0aGlzDQpTb3V0aCBBc2lhbiBkZWxpY2FjeS4gSGVub2MgZnJvbSBHcmFkZSAxMiByYXRlcyB0aGUgU2Ftb3NhcyDigJwxMC8gMTDigJ0gYXMNCuKAnCBcW3RcXWhleSB3ZXJlIGZpcmUu4oCdDQo8YnI+PGJyPg0KVGhlIGRpc2ggd2FzIHdlbGwgc2Vhc29uZWQsIHBlcmZlY3RseSBzcGljZWQgdG8gbm90IG1ha2UgeW91IGNyeSwgYnV0DQplbm91Z2ggdG8gbWFrZSB5b3VyIG1vdXRoIHdhdGVyLiBBY2NvcmRpbmcgdG8gTXVuYSBpbiBHcmFkZSAxMiwg4oCcQWxsIHRoZQ0Kc3BpY2VzIGNvbWUgdG9nZXRoZXIgYmVhdXRpZnVsbHku4oCdIFNvbWUgZGlzYWdyZWVkLCBzdWNoIGFzIEhpYmFhcSBmcm9tDQpHcmFkZSAxMSB3aG8gdGhvdWdodCB0aGF0IHRoZSBzYW1vc2Egd2FzIOKAnHZlcnkgdGFzdGVmdWwsIGJ1dCBuZWVkZWQgbW9yZQ0KcGVwcGVyLuKAnQ0KPGJyPjxicj4NClRoZSBwb3J0aW9uIHNpemVzIGNvdWxkIGhhdmUgYmVlbiBhIGxpdHRsZSBiZXR0ZXIgdG8gbWFrZSBmb3IgYSBtb3JlDQpmaWxsaW5nIHNuYWNrLiBIb3dldmVyLCB5b3UgY2FuIGFsd2F5cyBidXkgbW9yZSBhcyB0aGUgcHJpY2VzIHdlcmUNCmphdy1kcm9wcGluZ2x5IGdvb2QuIFR3byBzYW1vc2FzIGZvciBqdXN0IGEgZG9sbGFyISBJbmZsYXRpb24gc2VlbXMgdG8NCm5vdCBoYXZlIGNhdWdodCB1cCB3aXRoIHRoZXNlIHNhbW9zYSBwcmljZXMuDQo8YnI+PGJyPg0KT3ZlcmFsbCBSYXRpbmc6IDQuNS81DQo8YnI+PGJyPg0KRm9sbG93IEBtY2lzYWNhIG9uIEluc3RhZ3JhbSB0byBiZSByZW1pbmRlZCBhYm91dCBmdXR1cmUgU0FDQSBTYW1vc2ENCnNhbGVzLg0KDQoqKlBybyBUaXAtKiogQ29tZSBhIGZldyBtaW51dGVzIGVhcmx5IHRvIGJlYXQgdGhlIHJ1c2ggYW5kIGdldCBjaHV0bmV5DQpiZWZvcmUgaXQgcnVucyBvdXQuDQo=";export{G as default};
