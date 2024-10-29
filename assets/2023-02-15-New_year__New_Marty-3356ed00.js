const G="data:text/markdown;base64,DQpBcyB3ZSBzdGFydCB0aGUgbmV3IHNlbWVzdGVyLCBJIHRoaW5rIGl0J3MgdGltZSB0byBleGFtaW5lIG91cg0KcHJpb3JpdGllcywgc3RhcnRpbmcgd2l0aCBNQ0nigJlzIG93biBtYXNjb3QsIE1hcnR5IHRoZSBCZWFyLiBBdCBiZXN0LCB0aGUNCmNvc3R1bWUgbG9va3MgbGlrZSBhIGtub2NrIG9mZiBvZiBhIFlvZ2kgYmVhciBzcGVjaWZpY2FsbHkgZGVzaWduZWQgdG8NCnNjYXJlIGNoaWxkcmVuLiBBdCB3b3JzdCwgaXQgbG9va3MgbGlrZSBzb21lb25lIHNraW5uZWQgRnJlZGR5IEZhemJlYXINCmZyb20gRml2ZSBOaWdodHMgYXQgRnJlZGRpZXMgYW5kIGNhbGxlZCBpdCBhIG1hc2NvdC4gTWFzY290cyBhcmUgbm90DQpqdXN0IGJlYWNvbnMgKGdldCBpdD8pIGZvciBzY2hvb2wgc3Bpcml0LCBidXQgc3ltYm9saXplIHRoZSBzY2hvb2wgYXMgYQ0Kd2hvbGUuIFlldCwgZXZlbiB0aGUgc2Nob29sIHNlZW1zIGFzaGFtZWQgb2YgTWFydHkuIFdoZW4gaXMgdGhlIGxhc3QNCnRpbWUgeW91IHJlbWVtYmVyIHRoZW0gdW5jYWdpbmcgb3VyIGZhdm9yaXRlIGJlYXItc2hhcGVkIHRlcnJvcj8gSQ0KYmVsaWV2ZSBpdCB0byBiZSB0aGUgcHJpbWUgdGltZSB0byByZXBsYWNlIE1hcnR5IGFuZCB0aHJvdWdoIGludGVuc2l2ZQ0KcmVzZWFyY2gsIEkgaGF2ZSBuYXJyb3dlZCBkb3duIHRoZSBsaXN0IHRvIGZvdXIgbHVja3kgY29udGVzdGFudHMuDQpBZG1pdHRlZGx5LCBJIGhhdmUgbmV2ZXIgY29tcGV0ZWQgaW4gb3IgYXR0ZW5kZWQgYW55IE1DSSBzcG9ydHMgbWF0Y2hlcywNCmJ1dCBJIGRvbid0IHNlZSBob3cgdGhpcyBjb3VsZCBiZSBhIHByb2JsZW0uDQoNCkF2YXRhcuKAmXMgQWxpZW4gUmFjZTogTmHigJl2aQ0KDQpJIGhhdmUgbm90aWNlZCBhIHRpbWUgaG9ub3JlZCB0cmFkaXRpb24gb2YgbW9kZWxpbmcgc3BvcnRzIHRlYW0gbWFzY290cw0KYWZ0ZXIgaW5zdGFudGx5IHJlY29nbml6YWJsZSBmaWd1cmVzIGZyb20gaGlzdG9yeSwgc3VjaCBhbiBleGFtcGxlIGJlaW5nDQp0aGUgTWljaGFlbCBQb3dlciBUcm9qYW5zLiBNYXJ0eSB0aGUgQmVhciBsYWNrcyB0aGUgY3VsdHVyYWwgcmVsZXZhbmNlDQpvZiBoaXN0b3JpY2FsIGZpZ3VyZXMgdGhhdCB0aGUgVHJvamFuIG1hc2NvdCBoYXMuIFNvLCBpbiBzZWFyY2ggb2YgdGhpcw0KY3VsdHVyYWwgcmVsZXZhbmNlLCBJIHN1Z2dlc3Qgd2UgYXQgTWFydGluZ3JvdmUgZm9sbG93IHRoaXMgdHJhZGl0aW9uLA0KYnV0IHRha2UgaXQgYSBzdGVwIGZ1cnRoZXIgYnkgbG9va2luZyBpbnRvIHRoZSBmdXR1cmUuIEkgc2F5IHdlIGhhcm5lc3MNCnVuZGVuaWFibGUgY3VsdHVyYWwgcmVsZXZhbmNlIGFuZCBtb2RlbCBvdXIgbWFzY290IG9mZiBvZiB0aGUgTmHigJl2aSwgdGhlDQphbGllbiByYWNlIGluIHRoZSBoaXQgZnJhbmNoaXNlIEF2YXRhci4NCg0KS2llZmVyIFN1dGhlcmxhbmQNCg0KTWFueSBoaWdoIHNjaG9vbHMgaGF2ZSBmb3VuZCBzdWNjZXNzIHdpdGggaGF2aW5nIGEgY3V0ZSBhbmQgZnJpZW5kbHkNCmxvb2tpbmcgbWFzY290IHN1Y2ggYXMgdGhlIFJ1bm55bWVkZSBSYXZlbi4gTWFydHkgaXMgYSBnb29kIGF0dGVtcHQgdG8NCmZpdCBpbiB3aXRoIHRoaXMgdHJlbmQuIEhvd2V2ZXIsIHdlIG5lZWQgdG8gc3RhbmQgb3V0LCB3ZSBuZWVkIHRvIG1ha2UNCm91ciBtYXJrIG9uIHRoZSBtYXNjb3Qgd29ybGQuIEhvdyBkbyB3ZSBkbyB0aGF0PyBXZSBjaG9vc2UgdGhlIGN1dGVzdCwNCmZyaWVuZGxpZXN0IGFuaW1hbCBDYW5hZGEgaGFzIHRvIG9mZmVyOiBmYW1vdXMgYWN0b3IgYW5kIG5vdGFibGUNCk1hcnRpbmdyb3ZlIGFsdW1uaSBLaWVmZXIgU3V0aGVybGFuZC4gSGUgcmFkaWF0ZXMgZnJpZW5kbGluZXNzIGFuZA0KYXBwcm9hY2hhYmlsaXR5IGluIGhpcyByb2xlcyBhcyB0aGUgYnVsbHkgaW4gU3RhbmQgQnkgTWUsIHRoZQ0KYmxvb2R0aGlyc3R5IGtpbGxlciBpbiBGcmVld2F5IGFuZCBhcyB0aGUgbGl0ZXJhbCBibG9vZHRoaXJzdHkgdmFtcGlyZQ0KaW4gdGhlIExvc3QgQm95cy4gSSdtIHN1cmUgdGhhdCBhIGZlbHQgZWZmaWd5IG9mIGhpbSB3aWxsIGNlcnRhaW5seQ0KY2FwdHVyZSB0aGUgY3V0ZSBpbm5vY2VuY2Ugb2YgaGlzIHJvbGVzIGFzIHRoZSBhc3Nhc3NpbiBpbiBEZXNlcnQNClNhaW50cyBhbmQgYXMgdGhlIGFzc2Fzc2luIGluIENvbmZlc3Npb24uIElmIHdlIGNhcHR1cmUgYSBmcmFjdGlvbiBvZg0KaGlzIGdlbnRsZSBhbmQgbm9uLWludGltaWRhdGluZyBhdXJhLCB0aGlzIG1hc2NvdCB3aWxsIGRlZmluaXRlbHkgYmUgb25lDQp0aGF0IHN0dWRlbnRzIHdpbGwgd2FudCB0byBpbnRyb2R1Y2UgdG8gdGhlaXIgeW91bmdlciBzaWJsaW5ncy4NCjxicj48YnI+DQpUaGUgRXhpc3RlbnRpYWwgVGVycm9yIG9mIEdsb2JhbCBXYXJtaW5nDQo8YnI+PGJyPg0KTWFzY290cyBhcmUgYSBncmVhdCBzZWNyZXQgd2VhcG9uIGluIHNwb3J0cy4gTWFueSB0ZWFtcyBsaWtlIHRoZQ0KT2FrdmlsbGUgVHJhZmFsZ2FyIERldmlsIGhhdmUgY2hvc2VuIHRvIHRha2UgaW5zcGlyYXRpb24gZnJvbQ0KZnJpZ2h0ZW5pbmcgcmVsaWdpb3VzIGZpZ3VyZXMgYW5kIGluY29ycG9yYXRlIHRoZW0gaW50byB0aGVpciBtYXNjb3RzLg0KVGhpcyBpcywgb2YgY291cnNlLCBhIGdyZWF0IHNjYXJlIHRhY3RpY+KApiB3aG8gd291bGRu4oCZdCBiZSBhZnJhaWQgb2YgYQ0KdGVhbSB0aGF0IGJlc3RlZCBhIGRldmlsIHRoYXQgcGFyYWRlZCBhcm91bmQgdGhlaXIgZW5lbWllcywgZm9yY2luZyBpdA0KdG8gZGFuY2UgdG8gVG9kYXkncyBUb3AgNDAgYmVmb3JlIGdhbWVzPyBNYXJ0aW5ncm92ZSB3aWxsIG1vc3QNCmRlZmluaXRlbHkgc2VlIGFuIGluZmx1eCBvZiBzdWNjZXNzZnVsIGhvbWUtZ2FtZXMgaWYgd2UgaGFybmVzcyB0aGUNCmZyaWdodGVuaW5nIHBvd2VyIG9mIG1hc2NvdHMgYnkgY2hvb3NpbmcgdG8gaW5zdGlsbCBhIGRlZXAgZmVhciBpbiB0aGUNCmhlYXJ0IG9mIGV2ZXJ5IHNwb3J0cyB0ZWFtIHdlIHBsYXkgYWdhaW5zdCBpbiB0aGUgZnV0dXJlLiBXaGF0IGNvdWxkIGRvDQp0aGlzIGJldHRlciB0aGFuIGV4aXN0ZW50aWFsIHRlcnJvciBhYm91dCB0aGUgZnV0dXJlIHByb21pc2VkIGJ5IGdsb2JhbA0Kd2FybWluZz8gSG93IHdpbGwgd2UgcG9ydHJheSB0aGUgY29uY2VwdCBvZiBnbG9iYWwgd2FybWluZz8gV2VsbCwgdGhhdCdzDQpvdXQgb2YgbXkgZGVwYXJ0bWVudCEgSG93ZXZlciwgSSBob3BlIHRoZSBjb3N0dW1lIHdpbGwgcmVmZXJlbmNlIERvdWcNCkZvcmQgZ2V0dGluZyByaWQgb2YgdGhlIGNhcmJvbiB0YXggaW4gT250YXJpby4NCjxicj48YnI+DQpNYXJ0eSBBZ2Fpbg0KPGJyPjxicj4NCkFzIEkgY2FtZSB1cCB3aXRoIGlkZWFzIGFuZCByZXZpZXdlZCBtYXNjb3RzLCBJIGNhbWUgdG8gYW4gZXBpcGhhbnkuIEkNCnJlYWxpemVkIHdoeSB3ZSBoYXZlIG1hc2NvdHMgaW4gdGhlIGZpcnN0IHBsYWNlLiBJdCBpc27igJl0IGFib3V0IGhhdmluZw0KdGhlIGN1dGVzdCBvciBtb3N0IG1lbW9yYWJsZSBvciBzY2FyaWVzdCBtYXNjb3QuIEl0J3MgYWJvdXQgaGF2aW5nIGENCmNvbm5lY3Rpb24gd2l0aCB0aGUgc2Nob29sLiBNYXJ0eSBtYXkgYmUgYSBsaXR0bGUgd29yc2UgZm9yIHdlYXIgYW5kIEknbQ0Kbm90IHN1cmUgaWYgSSBoYXZlIGV2ZXIgc2VlbiBoaW0gYWN0dWFsbHkg4oCcaW4gdGhlIGZlbHTigJ0gYmVmb3JlIGJ1dCwgaGUNCmRvZXNu4oCZdCBuZWVkIHRvIGFwcGVhciBhbGwgdGhlIHRpbWUgZm9yIGhpcyBwcmVzZW5jZSB0byBiZSBmZWx0LiBIZSBpcw0KaW4gdGhlIEJBQ+KAmXMgeWVhcmx5IOKAnGJlYXIgY3Jhd2zigJ0sIGhlIGlzIGluIHRoZSBzaWduIGFib3ZlIHRoZSB0ZWNoDQpoYWxsd2F5IHRoYXQgc2F5cyDigJhIb21lIG9mIHRoZSBCZWFyc+KAmSwgYnV0LCBtb3N0IGltcG9ydGFudGx5LCBoZSBpcyBpbg0KZXZlcnkgTWFydGluZ3JvdmUgc3R1ZGVudOKAmXMgaGVhcnQuDQo=";export{G as default};
