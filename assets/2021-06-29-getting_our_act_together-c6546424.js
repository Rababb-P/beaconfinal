const Z="data:text/markdown;base64,CgpPdmVyIGEgeWVhciBhZnRlciB0aGUgQ09WSUQtMTkgcGFuZGVtaWMgYmVnYW4sIGhvcGUgaXMgZmluYWxseSBvbiB0aGUKaG9yaXpvbi4gV2l0aCBtb3JlIGFuZCBtb3JlIENhbmFkaWFucyBnZXR0aW5nIHZhY2NpbmF0ZWQsIGFuZCBDT1ZJRC0xOQpyYXRlcyBkcm9wcGluZyBkcmFtYXRpY2FsbHksIHRoZSByZXR1cm4gdG8gYSBub3JtYWwgbGlmZSBpbiB0aGUgbmVhcgpmdXR1cmUgZmluYWxseSBzZWVtcyBwb3NzaWJsZS4gQWNjb3JkaW5nIHRvICpPdXIgV29ybGQgaW4gRGF0YSosIENhbmFkYQpyZWNlbnRseSBiZWF0IG91dCBJc3JhZWwuIFRoaXMgbWFrZXMgdXMgdGhlIGdsb2JhbCBsZWFkZXIgaW4gZmlyc3QKdmFjY2luYXRpb24gcmF0ZXMsIHdpdGggNjQgcGVyY2VudCB0byB0aGVpciA2MyBwZXJjZW50LgoKV2hlbiByb2xsb3V0cyBzdGFydGVkIGluIGRldmVsb3BlZCBjb3VudHJpZXMganVzdCBhIGZldyBtb250aHMgYWdvLCBpdAp3YXMgaGFyZCB0byBpbWFnaW5lIHdl4oCZZCByZWFjaCB0aGlzIHBvaW50LiBDYW5hZGHigJlzIHZhY2NpbmUgcm9sbG91dCB3YXMKaGFyZGx5IHNvbWV0aGluZyB0byBiZSBwcm91ZCBvZi4gQmFjayBhdCB0aGUgc3RhcnQgb2YgTWFyY2gsIG9ubHkgNApwZXJjZW50IG9mIHBlb3BsZSBpbiBDYW5hZGEgd2VyZSB2YWNjaW5hdGVkLCBpbiBjb21wYXJpc29uIHRvIDE1LjIKcGVyY2VudCBpbiB0aGUgVW5pdGVkIFN0YXRlcywgYW5kIDU1IHBlcmNlbnQgaW4gSXNyYWVsLgoKVGhlIHR1cm5hcm91bmQgc3RhcnRlZCBhcm91bmQgQXByaWwuIFRoaXMgd2FzIHdoZW4gdGhlIHJhdGUgb2YKdmFjY2luYXRpb25zIGdyZWF0bHkgaW5jcmVhc2VkLCB3aXRoIGFyb3VuZCAxODgsMDAwIHBlb3BsZSByZWNlaXZpbmcKdmFjY2luZXMgZWFjaCBkYXkuIFRvZGF5LCBvdXIgcmF0ZSBpcyAzNzUsMDAwIHBlb3BsZSBhIGRheSAtIHdoaWNoIGlzCnJvdWdobHkgb25lIHBlcmNlbnQgb2Ygb3VyIHBvcHVsYXRpb24gYW5kIHRoZSBoaWdoZXN0IHBhY2Ugb2YgYW55CmNvdW50cnkuCgpTbyB3aGF0IGNoYW5nZWQ/IFRoZSBnb3Zlcm5tZW504oCZcyBhY2Nlc3MgaGFzIGJlZW4gdGhlIGxhcmdlc3QKY29udHJpYnV0aW5nIGZhY3Rvci4gVGhlIENhbmFkaWFuIGdvdmVybm1lbnQgd2FzIGxhcmdlbHkgcmVsaWFudCBvbgpjb3VudHJpZXMgc3VjaCBhcyB0aGUgVS5TLiBhbmQgdGhlIFUuSy4gZm9yIHZhY2NpbmUgc3VwcGx5LSBidXQgdGhleQp3ZXJlIGJ1c3kgc3VwcGx5aW5nIHRoZWlyIG93biBwb3B1bGF0aW9ucyB3aXRoIHZhY2NpbmVzIG1hZGUgaW4gdGhlaXIKb3duIHBsYW50cy4gQ2FuYWRh4oCZcyBpbmFiaWxpdHkgdG8gc2VjdXJlIHZhY2NpbmVzIGVhcmx5IG9uIGluIHRoZQpwcm9jZXNzIGhhZCBhbiBhZHZlcnNlIGltcGFjdCBvbiBvdXIgdmFjY2luYXRpb24gcmF0ZXMuCgpUaGFua2Z1bGx5LCB0aGVyZSBhcmUgbWlsbGlvbnMgb2YgdmFjY2luZXMgY29taW5nIGludG8gQ2FuYWRhIG5vdywgYW5kCmZpcnN0LWRvc2UgdmFjY2luYXRpb25zIGhhdmUgY29udGludWVkIGF0IGEgc3RlYWR5IHJhdGUsIHdpdGggcG9wLXVwIGFuZAptYXNzIHZhY2NpbmF0aW9uIGNsaW5pY3MgYWlkaW5nIHRoZSBpbXByZXNzaXZlIHJvbGxvdXQgb2YgcmVjZW50IHdlZWtzLgpBbWVyaWNhbiBjYXJkaW9sb2dpc3QgRXJpYyBUb3BvbCBjcmVkaXRzIHRoZSDigJxjdWx0dXJl4oCdIG9mIENhbmFkYSBmb3IgdGhlCmltcHJlc3NpdmUgc2hpZnQsIHNheWluZyB0aGF0IENhbmFkaWFucyBhcmUgbW9yZSBzY2llbmNlLWJhc2VkIGFuZCBsZXNzCmxpa2VseSB0byBiZSDigJxhbnRpLXZheHjigJ0gdGhhbiB0aG9zZSBpbiBoaXMgY291bnRyeS4KCkNhbmFkYeKAmXMgc3RyYXRlZ3kgLSBvZiB2YWNjaW5hdGluZyBhcyBtYW55IHBlb3BsZSB3aXRoIHRoZWlyIGZpcnN0IGRvc2UKYW5kIGRlbGF5aW5nIHRoZSBzZWNvbmQgZG9zZSAtIG1lYW5zIHdlIGhhdmUgb25lIG9mIHRoZSBsb3dlc3QgcmF0aW9zIG9mCmZpcnN0IGRvc2VzIHRvIHNlY29uZCBkb3NlcyBpbiB0aGUgd29ybGQuIEhvd2V2ZXIsIHRoZXJlIGlzIHNvbWUKZXZpZGVuY2UgdGhhdCBnaXZpbmcgbW9yZSBDYW5hZGlhbnMgcGFydGlhbCBwcm90ZWN0aW9uIGhhcyBjb250cmlidXRlZAp0byBlbnN1cmluZyBsZXNzIHBlb3BsZSB3ZXJlIGltcGFjdGVkIGJ5IHRoZSBzdXJnaW5nIHRoaXJkIHdhdmUuCgpBcyBtb3JlIHBlb3BsZSBpbiBDYW5hZGEgYmVjb21lIGZ1bGx5IHZhY2NpbmF0ZWQsIHdlIGNhbiBhaW0gb3VyIHNpZ2h0cwpvbiB0aGUgcmV0dXJuIHRvIGEgbm9ybWFsIGZ1dHVyZS4gQWxsIGxldmVscyBvZiB0aGUgQ2FuYWRpYW4gZ292ZXJubWVudAphcmUgdW5kZXIgcHJlc3N1cmUgdG8gZ2l2ZSBjbGVhciBndWlkZWxpbmVzIG9uIHJlc3RyaWN0aW9ucyB0aGF0IGNhbiBiZQpsaWZ0ZWQgZm9yIHBlb3BsZSB3aG8gYXJlIGZ1bGx5IHZhY2NpbmF0ZWQsIGluIGEgc2ltaWxhciBtYW5uZXIgdGhhdCBUaGUKVW5pdGVkIFN0YXRlc+KAmSBDZW50cmUgZm9yIERpc2Vhc2UgQ29udHJvbCBkaWQuIFdoaWxlIHRoZSBQdWJsaWMgSGVhbHRoCkFnZW5jeSBvZiBDYW5hZGEgc2F5cyBpdCB3aWxsIG9mZmVyIHNvbWUgZ3VpZGFuY2UgZXZlbnR1YWxseSwgZm9yIG5vdywKdGhlIHByb3ZpbmNlcyBhcmUgbGFyZ2VseSBvbiB0aGVpciBvd24uCgpDdXJyZW50bHkgaW4gT250YXJpbywgZnVsbHkgdmFjY2luYXRlZCBDYW5hZGlhbnMgYXJlIGV4cGVjdGVkIHRvIGZvbGxvdwp0aGUgc2FtZSBzb2NpYWwgZGlzdGFuY2luZyBydWxlcyBhcyBub24tdmFjY2luYXRlZCBwZW9wbGUsIHRob3VnaCB0aGUKQ2hpZWYgTWVkaWNhbCBPZmZpY2VyIG9mIHRoZSBwcm92aW5jZSBpcyB3b3JraW5nIHdpdGggZXhwZXJ0cyBvbiBydWxlcwpmb3IgdGhlIGZ1bGx5IHZhY2NpbmF0ZWQuIFdpdGggdGhlIGluY3JlYXNlZCB2YWNjaW5hdGlvbiByYXRlcyBmb3IgYm90aApmaXJzdCBhbmQgc2Vjb25kIGRvc2VzLCBpdCBpcyBsaWtlbHkgdGhhdCBhIHJldHVybiB0byBub3JtYWwgd2lsbCBjb21lCnNvb25lciByYXRoZXIgdGhhbiBsYXRlci4KCipJbWFnZSBTb3VyY2U6IOKAnFBlcnNvbiBIb2xkaW5nIFRlc3QgVHViZXPigJ0gYnkgUG9saW5hIFRhbmtpbGV2aXRjaCBmcm9tCnBleGVscy5jb20qCg==";export{Z as default};
