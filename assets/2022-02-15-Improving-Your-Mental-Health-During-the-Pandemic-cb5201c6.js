const G="data:text/markdown;base64,Ckl0IGlzIG5hdHVyYWwgdG8gZmVlbCBhbnhpZXR5IGR1cmluZyB0aGUgdGltZXMgd2UgbGl2ZSBpbi4gVGhlIENPVklELTE5CnBhbmRlbWljIGhhcyB0YWtlbiBhIG1lbnRhbCB0b2xsIG9uIHN0dWRlbnRzIGFuZCB0ZWFjaGVycyBhbGlrZS4gV2UgaGF2ZQpoYWQgdG8gZ28gdGhyb3VnaCBjb25zdGFudGx5IGNoYW5naW5nIGNpcmN1bXN0YW5jZXMsIHdoaWNoIGhhcyBjYXVzZWQKbWFueSBwZW9wbGUgdG8gc3RydWdnbGUgd2l0aCB0aGVpciBtZW50YWwgaGVhbHRoLiBJbiB0aW1lcyBvZiBncmVhdApzdHJlc3MsIHdlIGFsbCBuZWVkIHNvbWUgdGltZSB0byBzbG93IGRvd24gYW5kIHVud2luZC4gSGVyZSBhcmUgdGhyZWUKZ3JlYXQgd2F5cyB0byBoZWxwIHlvdXJzZWxmIGFuZCB0aG9zZSBhcm91bmQgeW91IG1hbmFnZSB0aGUgcHJlc3N1cmUuCgoxLiAgRGV2ZWxvcCBhIEhlYWx0aHkgUm91dGluZQoKQSBjcnVjaWFsIHBhcnQgb2YgbWVudGFsIGhlYWx0aCBpcyB0byBkZXZlbG9wIGhlYWx0aHkgaGFiaXRzLiBJdOKAmXMKYWx3YXlzIGltcG9ydGFudCB0byB0YWtlIGNhcmUgb2YgeW91cnNlbGYsIGFuZCB0aGVyZSBhcmUgbWFueSB3YXlzIHRvCnN0YXJ0LiBZb3UgY2FuIHRyeSB0byBlYXQgaGVhbHRoeSBhbmQgd2VsbCBiYWxhbmNlZCBtZWFscywgYXMgd2VsbCBhcwpleGVyY2lzZSByZWd1bGFybHkuIEFsc28sIHJlbWVtYmVyIHRvIGdldCBhdCBsZWFzdCA4IGhvdXJzIG9mIHNsZWVwLgpUaGVzZSBzbWFsbCwgeWV0IGludGVudGlvbmFsIGNoYW5nZXMgY2FuIGJvb3N0IHNlbGYgZXN0ZWVtIGFuZCBhY3R1YWxseQptYWtlIHlvdSBmZWVsIGdvb2QgYWJvdXQgeW91cnNlbGYuIElmIHlvdSBnZXQgdXNlZCB0byB0aGVzZSByb3V0aW5lcywgaXQKY2FuIGJvb3N0IHlvdXIgc2VsZiBpbWFnZSBhbmQgaW1wcm92ZSB5b3VyIG1lbnRhbCB3ZWxsYmVpbmcuCgoyLiAgVGFrZSBhIEJyZWFrIGZyb20gdGhlIE5ld3MKCkl0J3Mgbm9ybWFsIHRvIHdhbnQgdG8ga25vdyBhbGwgdGhlIGZhY3RzIGJ5IGxvb2tpbmcgYXQgdGhlIG5ld3MsIGJ1dCBhdAp0aGUgc2FtZSB0aW1lLCBpdCdzIGFsc28gaW1wb3J0YW50IHRvIHRha2UgYSBicmVhayBmcm9tIGhlYXJpbmcgYWJvdXQKdGhlIHBhbmRlbWljLiBEb2luZyBhY3Rpdml0aWVzIHRoYXQgeW91IGVuam95LCBzdWNoIGFzIGdvaW5nIG9uIHdhbGtzLApjcmVhdGluZyBhcnR3b3JrLCBvciB3YXRjaGluZyBUViwgY2FuIGJvb3N0IHlvdXIgbWVudGFsIGhlYWx0aCBncmVhdGx5LgoKMy4gIFRhbGsgd2l0aCBGcmllbmRzIGFuZCBGYW1pbHkKClRoaXJkbHksIGNvbm5lY3Rpbmcgd2l0aCB5b3VyIGZyaWVuZHMgYW5kIGZhbWlseSBpcyB2ZXJ5IGltcG9ydGFudApkdXJpbmcgdGltZXMgb2Ygc29jaWFsIGlzb2xhdGlvbi4gWW91IGNhbiBoYXZlIHBob25lIG9yIHZpZGVvIGNhbGxzLAp2aXJ0dWFsIGdhbWUgbmlnaHRzLCBvciB0ZXh0IG9uZSBhbm90aGVyLiBHZXR0aW5nIGluIHRvdWNoIHdpdGggb3RoZXJzCmFuZCwgZWl0aGVyIHRhbGtpbmcgYWJvdXQgeW91ciBmZWVsaW5ncyBvciBjaG9vc2luZyB0byB0YWtlIHlvdXIgbWluZApvZmYgb2YgdGhlbSwgd2lsbCBjZXJ0YWlubHkgbWFrZSB5b3UgZmVlbCBsZXNzIGxvbmVseS4gVGhlc2UgdGhpbmdzIGNhbgpoZWxwIHlvdSBmZWVsIG1vcmUgY29ubmVjdGVkIHRvIHRoZSBmYWN0IHRoYXQgd2UgYXJlIGFsbCBicmF2aW5nIHRocm91Z2gKdGhlIHBhbmRlbWljIHRvZ2V0aGVyLgoKV2l0aCB0aGUgcGFuZGVtaWMgaGF2aW5nIGNhdXNlZCB1bmZhbWlsaWFyIHNpdHVhdGlvbnMsIGxpa2UgdmlydHVhbApzY2hvb2wsIGxvY2tkb3ducywgYW5kIGxpbWl0ZWQgc29jaWFsIGdhdGhlcmluZ3MsIHdlIGFyZSBubyBkb3VidCBsaXZpbmcKaW4gc3RyZXNzZnVsIHRpbWVzLiBUaGUgZXZlci1jaGFuZ2luZyBjaXJjdW1zdGFuY2VzIGFuZCByZXNwb25zaWJpbGl0aWVzCmluIGxpZmUgY2FuIGFsc28gbWFrZSBpdCBoYXJkIHRvIGFkYXB0LCBhbmQgY2VydGFpbmx5IGRvbuKAmXQgbWFrZSBpdCBhbnkKZWFzaWVyLiBIb3dldmVyLCBpZiB3ZSByZW1lbWJlciB0byB0YWtlIGNhcmUgb2Ygb3Vyc2VsdmVzIHRocm91Z2ggdGhpbmdzCmxpa2UgaGVhbHRoeSBsaWZlc3R5bGUgaGFiaXRzIG9yIGNvbm5lY3Rpbmcgd2l0aCBsb3ZlZCBvbmVzLCB0aGVuIHdlIGNhbgpjZXJ0YWlubHkgc3RhcnQgdG8gaW1wcm92ZSBvdXIgbWVudGFsIGhlYWx0aCwgYW5kIHdvcmsgdG93YXJkcyB0YWtpbmcKb3VyIGxpdmVzIGJhY2suCgpJbWFnZSBzb3VyY2U6CgpbKmh0dHBzOi8vd29yZHByZXNzLm9yZy9vcGVudmVyc2UvaW1hZ2UvMzMyODg1ZWItNDc1OC00Nzk0LTg1NmItMGYxYzI2Mjc0MmZiLypdKGh0dHBzOi8vd29yZHByZXNzLm9yZy9vcGVudmVyc2UvaW1hZ2UvMzMyODg1ZWItNDc1OC00Nzk0LTg1NmItMGYxYzI2Mjc0MmZiLykK";export{G as default};
