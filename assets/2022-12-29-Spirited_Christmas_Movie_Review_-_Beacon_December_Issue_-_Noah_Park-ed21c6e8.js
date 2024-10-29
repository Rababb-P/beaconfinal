const g="data:text/markdown;base64,CkhhdmUgeW91IGhpdCBkb3VibGUgZGlnaXRzIG9uIEhvbWUgQWxvbmUgcmVydW5zPyBEbyB5b3Uga25vdyB0aGUgRWxmCnNjcmlwdCBiZXR0ZXIgdGhhbiB0aGUgYmFjayBvZiB5b3VyIGhhbmQ/IEV2ZW4gdGhvdWdoIG1hbnkgQ2hyaXN0bWFzCm1vdmllIGNsYXNzaWNzIGhhdmUgbG9zdCB0aGUgdmlicmFudCBhdXJhIHRoZXkgb25jZSBoYWQsIFNwaXJpdGVk4oCZcwptb2Rlcm4sIG11c2ljYWwgdHdpc3Qgb24gQ2hhcmxlcyBEaWNrZW5z4oCZIOKAnEEgQ2hyaXN0bWFzIENhcm9s4oCdIG9mZmVycyBhCmZsYW1ib3lhbnQgZmlsbSB0aGF0IHdpbGwgZ2V0IHlvdXIgZm9vdCB0YXBwaW5nLiBUaGlzIGJpZyBhbmQgYm9pc3Rlcm91cwptdXNpY2FsIGNvbWVkeSBvZmZlcnMgYW4gZXhjaXRpbmcgaG9saWRheSBtb3ZpZSBvcHRpb24gd29ydGggY2hlY2tpbmcKb3V0IGZvciBpdHMgcHVuY2hsaW5lcyBhbmQgZW1vdGlvbmFsIHF1YWxpdHkuCjxicj48YnI+Ckl0J3MgdGhlIGZpcnN0IHRpbWUg4oCcQSBDaHJpc3RtYXMgQ2Fyb2zigJ0gaXMgdG9sZCBmcm9tIHRoZSBwZXJzcGVjdGl2ZSBvZgp0aGUgZ2hvc3RzIG9mIENocmlzdG1hcywgYW5kIHRoaXMgaW50ZXJwcmV0YXRpb24gc3RhcnMgV2lsbCBGZXJyZWwgYXMKdGhlIHByb3RhZ29uaXN0OiB0aGUgR2hvc3Qgb2YgQ2hyaXN0bWFzIFByZXNlbnQsIGFkZHJlc3NlZCBhcyBQcmVzZW50LgpQcmVzZW50IHN0dW1ibGVzIHVwb24gQ2xpbnQgQnJpZ2dzLCBwbGF5ZWQgYnkgUnlhbiBSZXlub2xkcywgYW4gb2lseQpidXNpbmVzc21hbiB3aG8gc3BlY2lhbGl6ZXMgaW4gY3JhZnRpbmcgY29udHJvdmVyc3kuIFByZXNlbnQgaWRlbnRpZmllcwpDbGludCBhcyB0aGUgcGVyZmVjdCBjYW5kaWRhdGUgZm9yIHRoZSBnaG9zdHPigJkgbmV4dCDigJxwZXJw4oCdLiBFYWNoIHllYXLigJlzCuKAnHBlcnDigJ0sIGEgU2Nyb29nZS1saWtlIGluZGl2aWR1YWwgdG8gYmUgaGF1bnRlZCBldmVyeSBDaHJpc3RtYXMsIGlzCm9mZmVyZWQgYSBzaG90IGF0IHJlZGVtcHRpb24uCjxicj48YnI+CldoaWxlIHRoZSBmaWxtIGhhcyBhIHBsYXlmdWwgb3Zlcmx5aW5nIHRvbmUgYW5kIGEgQnJvYWR3YXkgZmVlbCwgdGhlCmFidW5kYW5jZSBvZiB0aW1lcyBjaGFyYWN0ZXJzIGJ1cnN0IGludG8gc29uZyB0b29rIGF3YXkgZnJvbSB0aGUKc3RvcnlsaW5lIGR1cmluZyB0aGUgZmlyc3QgdGhpcmQuIEFkZGl0aW9uYWxseSwgdGhlIHBsb3QgaXMgbWVzc3kgYXQKdGltZXMgYW5kIGNvbmZ1c2luZy4gWWV0IEZlcnJlbCBhbmQgUmV5bm9sZHMgaGF2ZSBzdGVsbGFyIGNoZW1pc3RyeSwgYW5kCnRoZSBlbW90aW9ucyBTcGlyaXRlZCBzcGlsbHMgb3V0IGFyZSBvbmUgb2YgaXRzIGJlc3QgdHJhaXRzLiBSZXlub2xkcwplbWJvZGllcyBDbGludCdzIHNtYXJ0LWFsZWNrIHBlcnNvbmFsaXR5IGxpa2Ugd2XigJl2ZSBzZWVuIGJlZm9yZSBpbgpEZWFkcG9vbC4gU3Bpcml0ZWQgbWF5IG5vdCBiZSBhbiBpbnN0YW50IENocmlzdG1hcyBjbGFzc2ljLCBidXQgaXQncwptb3JlIHRoYW4gYSBzb29uLXRvLWJlLWZvcmdvdHRlbiBzdHJlYW1pbmcgc3RvY2tpbmcgc3R1ZmZlci4gSXTigJlzIHdlbGwKd29ydGggYSB3YXRjaCB0byBwYXNzIHlvdXIgdGltZSB0aGlzIHdpbnRlciBicmVhaywgYW5kIGl0IGNhbiBiZSBmb3VuZApvbiBBcHBsZSBUVisgcmF0ZWQgUEctMTMuCjxicj48YnI+Ck1vdmllIFJhdGluZzog4piF4piF4piF4piG4piGIDMuNSBzdGFycwo=";export{g as default};
