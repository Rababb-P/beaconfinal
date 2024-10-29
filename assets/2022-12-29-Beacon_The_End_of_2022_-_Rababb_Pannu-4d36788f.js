const G="data:text/markdown;base64,CgpBcyB0aGUgeWVhciBzbG93bHkgdGlja3MgZG93biwgSSBsaWtlIHRvIHJlbWluaXNjZSBhYm91dCBhbGwgdGhhdCBoYXMgCmhhcHBlbmVkIGluIDIwMjIuIEF0IHRoZSBiZWdpbm5pbmcgb2YgdGhpcyB5ZWFyLCBpdCBtaWdodCBoYXZlIGJlZW4gY29sZCAKYW5kIGRhcmssIGJ1dCBhdCBsZWFzdCB3ZSBzdGFydGVkIHJlY292ZXJpbmcgZnJvbSB0aGUgcGFuZGVtaWMuIFNjaG9vbCAKd2FzIHN0cmVzc2Z1bCBmb3IgbWFueSBvZiB1cyBpbiBzcHJpbmcsIGJ1dCBvbmNlIHRlc3RzIGFuZCBjdWxtaW5hdGlvbnMgCndlcmUgZG9uZSwgSnVseSBzZWVtZWQgY2xvc2VyIHRoYW4gZXZlci4gV2l0aCB0aGUgZW5kIG9mIHRoZSBzY2hvb2wgeWVhciAKY2FtZSB0aGUgc3VtbWVyIGJyZWFrOyBidXQgdW5mb3J0dW5hdGVseSwgc3VtbWVyIGNhbWUgYW5kIHdlbnQgZmFyIHRvbyAKcXVpY2tseS4gTm9uZXRoZWxlc3MsIGl0IHdhcyBzdGlsbCBmdW4uCjxicj48YnI+CllvdSBrbm93IHdoYXQgY29tZXMgbmV4dC4gVGhlIHN0YXJ0IG9mIHNjaG9vbCB3YXMgbmVydmUtd3JhY2tpbmcgYW5kCmV4Y2l0aW5nIGF0IHRoZSBzYW1lIHRpbWUuIFdlIGFsbCByZW1lbWJlciBob3cgc3RyZXNzZWQgYW5kIGFubm95ZWQgd2UKd2VyZSBhcyB3ZSB3YWl0ZWQgaW4gdGhlIGxvbmcgbGluZSBvdXRzaWRlIHRoZSBndWlkYW5jZSBvZmZpY2UuIFlldCwgdGhlCmZpcnN0IGRheSBvZiBzY2hvb2wgd2FzIHN0aWxsIHJlZnJlc2hpbmcuIFdhdGNoaW5nIHRoZSBncmFkZSBuaW5lcwpydW5uaW5nIGFyb3VuZCB3aXRoIHNlZW1pbmdseSBsaW1pdGxlc3MgZW5lcmd5IG5ldmVyIGdldHMgb2xkLiBBZnRlciBhCndoaWxlLCB0aG91Z2gsIGV2ZXJ5b25lIHN0YXJ0ZWQgdG8gbWlzcyB0aG9zZSB3YXJtIHN1bW1lciBkYXlzLgpVbmZvcnR1bmF0ZWx5LCBpdCB3aWxsIGJlIGEgd2hpbGUgYmVmb3JlIHdlIGNhbiBnZXQgdGhvc2UgYmFjay4gV2l0aCB0aGUKYmVnaW5uaW5nIG9mIHNjaG9vbCBjYW1lIGNvbGQsIHdldCwgYXV0dW1uIG1vcm5pbmdzIGFuZCBkYXJrIGFmdGVybm9vbnMsCmJ1dCBzcGlyaXRzIHN0aWxsIHJhbiBoaWdoIHVudGlsIHRoZSBkcmVhZGVkIG1pZHRlcm1zLiBIb3BlZnVsbHksCm5vYm9keSBkaWQgdG9vIGJhZGx5Lgo8YnI+PGJyPgpTb29uIGFmdGVyIHRoZSBhbmd1aXNoIG9mIHJlcG9ydCBjYXJkcyB3YXMgb3ZlciwgdGhlIGZpcnN0IHNub3dmYWxsCm9jY3VycmVkLCBmb3JjaW5nIGV2ZXJ5b25lIHRvIGJ1bmRsZSB1cCBpbiBqYWNrZXRzIGFuZCBzd2VhdGVycyBhbmQKcHJlcGFyZSBmb3IgdGhlIGNvbGQuIE9mIGNvdXJzZSwgdGhlcmUgYXJlIHRob3NlIGZldyBwc3ljaG9wYXRocyB3aG8gZ28Kb3V0c2lkZSBpbiAtMjDCsEMgd2VhdGhlciB3ZWFyaW5nIG9ubHkgYSBob29kaWUgYW5kIGZsYW5uZWwgcHlqYW1hCmJvdHRvbXMuCjxicj48YnI+Ck5vdywgaGVyZSB3ZSBhcmUsIHNheWluZyBnb29kYnllIHRvIG91ciBmcmllbmRzIGFuZCBwcmVwYXJpbmcgZm9yIGEKbG9uZywgd2VsbC1kZXNlcnZlZCB3aW50ZXIgYnJlYWsuIEFmdGVyIGFsbCB0aGF0IGhhcyBoYXBwZW5lZCBpbiAyMDIyLAp3ZSBjYW4gZmluYWxseSBzaXQgYmFjayBhbmQgZW5qb3kgdGhlIGZpbmFsIGZldyBkYXlzIGJlZm9yZSB0aGUgbmV3CnllYXIuCjxicj48YnI+CkhhcHB5IGhvbGlkYXlzIE1hcnRpbmdyb3ZlISBTdGF5IHNhZmUuCg==";export{G as default};