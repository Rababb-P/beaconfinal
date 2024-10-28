const I="data:text/markdown;base64,CgpJ4oCZdmUgYmVlbiBhIHBhcnQgb2YgdGhlICpCZWFjb24qIGZvciBmb3VyIHllYXJzLCBhbmQgaXTigJlzIGNyYXp5IHRvIHRoaW5rCnNvIG1hbnkgb2YgdXMgYXJlIGV4cGVyaWVuY2luZyBvdXIgbGFzdCBmZXcgZGF5cyBhdCBNYXJ0aW5ncm92ZS4gVGhlCjIwMjEgLyAyMDIyIHNjaG9vbCB5ZWFyIGlzIGZpbmFsbHkgY29taW5nIHRvIGEgY2xvc2UhIEl04oCZcyB0aW1lIHRvCmZpbmlzaCB5b3VyIHN1bW1hdGl2ZXMgYW5kIHN0cmVzcyBhYm91dCB5b3VyIGZpbmFsIHRlc3RzLCBhbmQgdGhlbgpmb3JnZXQgZXZlcnl0aGluZyB5b3UgbGVhcm5lZCB1bnRpbCBuZXh0IHllYXIuCgpJ4oCZbSBzdXJlIHlvdeKAmXJlIHRoaW5raW5nIGFib3V0IGhvdyBleGNpdGVkIHlvdSBhcmUgZm9yIHN1bW1lciwgYnV0IHRoZXJlCmFyZSBzdGlsbCBhIGZldyBtb3JlIGRheXMgb2Ygc2Nob29sIGxlZnQuIFRoaXMgeWVhciBoYXMgYmVlbiBwcmV0dHkKc3RyZXNzZnVsIGZvciBhbGwgb2YgdXMsIGFuZCBpdOKAmXMgc28gZWFzeSB0byBqdXN0IGNoZWNrIG91dCB1bnRpbCBzdW1tZXIKY29tZXMuIFN0aWxsLCB3ZeKAmXJlIHN0dWNrIGluIHRoZXNlIGZhbWlsaWFyIHdpbmRvd2xlc3MgaGFsbHMgZm9yIGEgd2hpbGUKeWV0LCBzbyBoZXJlIGFyZSBzb21lIHRpcHMgdG8gbWFrZSB0aGUgbW9zdCBvZiB5b3VyIGxhc3QgZGF5cyBhdApNYXJ0aW5ncm92ZS4KCjEuICAqKkRvbuKAmXQgQ29tcGxldGVseSBab25lIE91dCoqCgo+IE5vdyB0aGF0IHlvdXIgbWFya3MgYXJlIG1vc3RseSBpbiwgaXTigJlzIGVhc3kgdG8gZmVlbCBsaWtlIHRoZXJl4oCZcwo+IG5vdGhpbmcgbGVmdCB0byBsaXN0ZW4gdG8gaW4gY2xhc3MuIEJ1dCBldmVuIGlmIHlvdeKAmXJlIG5vdCBhZnJhaWQgb2YKPiB5b3VyIGdyYWRlcyBkcm9wcGluZywgdGhlcmUgYXJlIHN0aWxsIHZhbHVhYmxlIHRoaW5ncyB5b3UgY2FuIGxlYXJuCj4gZnJvbSB5b3VyIHRlYWNoZXJzLiBEbyB5b3UgbmVlZCB0byBrbm93IHRoZSBtaXRvY2hvbmRyaWEgaXMgdGhlCj4gcG93ZXJob3VzZSBvZiB0aGUgY2VsbCBpbiB5b3VyIGRheSB0byBkYXkgbGlmZT8gUHJvYmFibHkgbm90LiBCdXQgeW91Cj4gd2lsbCBuZWVkIGl0IG5leHQgeWVhci4KCjIuICAqKkVhdCBPdXRzaWRlIE1vcmUqKgoKPiBUaGUgc3VuIGlzIGNvbnN0YW50bHkgc2hpbmluZywgdGhlIHdlYXRoZXIgaXMgYW1hemluZ+KApiBBbmQgeWV0IHNvIG1hbnkKPiBwZW9wbGUgYXJlIHN0aWxsIGluIHRoZSBjYWZldGVyaWEgb3IgaW4gdGhlIGhhbGx3YXlzLiBUcnVzdCBtZSwgeW914oCZbGwKPiByZWdhaW4gc29tZSBlbmVyZ3kgYnkgZ2V0dGluZyBzb21lIFZpdGFtaW4gRC4gSnVzdCBkb27igJl0IGZlZWQgdGhlCj4gZ2Vlc2UuIFRoZXnigJl2ZSBiZWVuIGdldHRpbmcgYm9sZGVyLgoKMy4gICoqVGFrZSBDYXJlIG9mIFlvdXIgTWVudGFsIEhlYWx0aCoqCgo+IElmIHlvdeKAmXZlIGJlZW4gd29ya2luZyBoYXJkIG5vbi1zdG9wLCB5b3UgbWlnaHQgZmVlbCB5b3Vyc2VsZiBzdGFydCB0bwo+IGFwcHJvYWNoIHRoYXQgZHJlYWRlZCBidXJub3V0LiBUYWtlIGEgZmV3IHN0ZXBzIGJhY2suIEh1ZyB5b3VyIHBldHMsCj4gZ28gZm9yIGEgcnVuLCBvciBiaW5nZSB0aGUgbmV3IHNlYXNvbiBvZiAqU3RyYW5nZXIgVGhpbmdzLiogVGFrZSB0aGUKPiB0aW1lIGFuZCBkbyB0aGUgdGhpbmdzIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB5b3Ugc3RhcnQgdGhlIHN1bW1lciBvZmYKPiBvbiBhIHJpZ2h0IG5vdGUuCgo0LiAgKipTcGVuZCBBcyBNdWNoIFRpbWUgQXMgWW91IENhbiBXaXRoIEZyaWVuZHMqKgoKPiBUaGlzIG9uZeKAmXMgbWFpbmx5IGZvciBhbGwgdGhlIGdyYWRlIDEycyBvdXQgaGVyZS4gSW4gU2VwdGVtYmVyLAo+IGV2ZXJ5b25lIHdpbGwgYmUgbW92aW5nIHRvIGRpZmZlcmVudCBjaXRpZXMsIHN0YXJ0aW5nIGRpZmZlcmVudCBqb2JzCj4gYW5kIHByb2dyYW1zLiBZb3Ugd2lsbCBoYXZlIGEgaGFuZGZ1bCB5b3XigJlsbCBkZWZpbml0ZWx5IHN0YXkgaW4gdG91Y2gKPiB3aXRoLCBidXQgbWFueSBtb3JlIHlvdSB3b27igJl0LiBJIGd1YXJhbnRlZSB0aGF0IHlvdeKAmWxsIG1pc3MgZXZlcnlvbmUsCj4gZnJvbSB5b3VyIGJlc3QgZnJpZW5kIHRvIHRoYXQga2lkIGluIHlvdXIgY2FsYyBjbGFzcyB3aG8gd29u4oCZdCBzdG9wCj4gdGFwcGluZyB0aGVpciBmb290LiBFbmpveSB0aGVzZSBsYXN0IGZldyBkYXlzIHRvZ2V0aGVyLgoKSSBob3BlIHlvdSBlbmpveWVkIHRoZXNlIHRpcHMgZm9yIGxpdmluZyBNQ0ktbGlmZSB0byB0aGUgZnVsbGVzdC4gRW5qb3kKdGhlc2UgbGFzdCBmZXcgZGF5cyBvZiBzY2hvb2wsIGFuZCBnb29kIGx1Y2sgd2l0aCBldmVyeXRoaW5nIHRoYXQgY29tZXMKeW91ciB3YXkuIEnigJltIHN1cmUgd2hhdGV2ZXIgeW91IGVuZCB1cCBkb2luZywgaXTigJlsbCBiZSBncmVhdCAtIGJlY2F1c2UKeW914oCZbGwgYXQgbGVhc3Qgd29yayBpbiBhbiBvZmZpY2Ugd2l0aCB3aW5kb3dzIQoKSW1hZ2UgY3JlYXRlZCBieSBbKkFpZGFuIFNjaHJlZGVyKl0oaHR0cHM6Ly9tY2liZWFjb24uY29tL21lbWJlci9haWRhbi1zY2hyZWRlcikK";export{I as default};
