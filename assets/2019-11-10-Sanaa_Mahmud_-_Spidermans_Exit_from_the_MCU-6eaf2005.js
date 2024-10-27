const G="data:text/markdown;base64,DQpJZiB5b3UncmUgYSBNYXJ2ZWwgZmFuIGxpa2UgbWUsIHRoZW4geW91J3ZlIHByb2JhYmx5IGhlYXJkIGFib3V0IHRoZQ0KcmVjZW50IGRyYW1hIGJldHdlZW4gU29ueSBhbmQgRGlzbmV5IHJlZ2FyZGluZyBTcGlkZXItTWFuLiBJZiB5b3UNCmhhdmVuJ3QgaGVhcmQgYWJvdXQgd2hhdCBpcyBoYXBwZW5pbmcsIGhlcmUncyBhIHN1bW1hcnkuIFNvbnkgaGFzIG93bmVkDQp0aGUgZmlsbSByaWdodHMgdG8gU3BpZGVyLU1hbiBzaW5jZSAxOTk4LiBJbiAyMDE1LCB0aGV5IG1hZGUgYSBkZWFsIHdpdGgNCkRpc25leSwgYWdyZWVpbmcgdG8gbGVuZCB0aGUgY2hhcmFjdGVyIG9mIFNwaWRlci1NYW4gdG8gTWFydmVsIFN0dWRpb3MsDQphIGNvbXBhbnkgb3duZWQgYnkgRGlzbmV5LCBhbmQgdG8gdGhlIE1hcnZlbCBDaW5lbWF0aWMgVW5pdmVyc2UuIEFzIHdlDQpoYXZlIHNlZW4gb3ZlciB0aGUgbGFzdCBmZXcgeWVhcnMsIFRvbSBIb2xsYW5kJ3MgU3BpZGVyIE1hbiBoYXMgcGxheWVkIGENCmxhcmdlIHJvbGUgaW4gbWFueSBNYXJ2ZWwgbW92aWVzLiBSZWNlbnRseSwgU29ueSBhbmQgRGlzbmV5IGhhdmUNCnJldmlzaXRlZCB0aGVpciBkZWFsLCBhbmQgZ29uZSB0aHJvdWdoIG5lZ290aWF0aW9ucyBhYm91dCBmdXR1cmUgc3RlcHMNCmZvciB0aGUgU3BpZGVyLU1hbiBjaGFyYWN0ZXIuIE9uIEF1Z3VzdCAyMHRoLCAyMDE5LCBTb255IGFubm91bmNlZCB0aGF0DQpLZXZpbiBGZWlnZSwgcHJlc2lkZW50IG9mIE1hcnZlbCBTdHVkaW9zLCB3b24ndCBiZSBwbGF5aW5nIGEgcm9sZSBpbiB0aGUNCnByb2R1Y3Rpb24gb2YgdGhlIG5leHQgU3BpZGVyLU1hbiBmaWxtLiBUaGlzIG1lYW5zIHRoYXQgU3BpZGVyLU1hbiBpcw0KY3VycmVudGx5IG5vdCBhIHBhcnQgb2YgdGhlIE1DVSBhbnltb3JlLiBUaGlzIG5ld3MgbGVmdCBmYW5zIGZlZWxpbmcNCmJvdGggYW5ncnkgYW5kIGhlYXJ0YnJva2VuLCBzaW5jZSBNYXJ2ZWwncyBsYXRlc3QgbW92aWUsICJTcGlkZXItTWFuOg0KRmFyIEZyb20gSG9tZSIgaGFkIHNldCB1cCBTcGlkZXItTWFuIHRvIGJlIHRoZSBuZXcgZmFjZSBvZiB0aGUNCmZyYW5jaGlzZS4gVXBvbiBoZWFyaW5nIGFib3V0IHRoaXMsIEkgZGlkbid0IHVuZGVyc3RhbmQgd2hhdCBoYXBwZW5lZA0KYmV0d2VlbiB0aGUgdHdvIG1ham9yIGNvbXBhbmllcywgYW5kIHdhbnRlZCB0byBrbm93IHRoZSByZWFzb24gYmVoaW5kDQp0aGUgZGVjaXNpb25zIGJlaW5nIG1hZGUuwqANCg0KU29ueSBvd25zIHRoZSByaWdodHMgdG8gU3BpZGVyLU1hbiBhbmQgZ2V0cyB0byBrZWVwIHRoZW0gYXMgbG9uZyBhcyB0aGV5DQptYWtlIGEgbmV3IFNwaWRlci1NYW4gbW92aWUgZXZlcnkgZml2ZSB0byBzaXggeWVhcnMuIFRoZXkgc3RhcnRlZCB3aXRoDQoiU3BpZGVyLU1hbiIgaW4gMjAwMiwgc3RhcnJpbmcgVG9iZXkgTWFndWlyZS4gQWZ0ZXIgaXRzIHN1Y2Nlc3MsIHRoZXkNCnByb2NlZWRlZCB0byByZWxlYXNlICJTcGlkZXItTWFuIDIiLCBhbmQgdGhlbiAiU3BpZGVyLU1hbiAzIiBpbiAyMDA3Lg0KVGhlIHRoaXJkIG1vdmllIGRpZG4ndCBkbyBxdWl0ZSBhcyB3ZWxsIGFzIGhvcGVkLCBjb3N0aW5nIFwkMjYwIG1pbGxpb24NCnRvIG1ha2UsIHdpdGggcHJvZml0cyBkaXBwaW5nIHNpZ25pZmljYW50bHkgZnJvbSB0aGUgZmlyc3QgdHdvIG1vdmllcy7CoA0KDQpGaXZlIHllYXJzIGxhdGVyLCBTb255IGRlY2lkZWQgdG8gcmVib290IHRoZSBzZXJpZXMsIGFuZCByZWxlYXNlZCAiVGhlDQpBbWF6aW5nIFNwaWRlci1NYW4iIHN0YXJyaW5nIEFuZHJldyBHYXJmaWVsZC4gVGhpcyBtb3ZpZSBtYWRlIG92ZXIgXCQ3MDANCm1pbGxpb24gd29ybGR3aWRlLiBXaXRoIGl0cyBzdWNjZXNzLCJUaGUgQW1hemluZyBTcGlkZXItTWFuIDIiIHdhcyBtYWRlLg0KVW5mb3J0dW5hdGVseSwgaXQgZGlkIG5vdCBsaXZlIHVwIHRvIFNvbnkncyBleHBlY3RhdGlvbnMsIHdpdGggdGhlIHZlcnkNCmhpZ2ggcHJvZHVjdGlvbiBjb3N0cyBhbmQgbGVzc2VuZWQgZXhjaXRlbWVudCBmcm9tIGZhbnMuwqANCg0KQmVjYXVzZSBvZiB0aGVpciBmYWlsZWQgYXR0ZW1wdHMsIFNvbnkgc3RydWNrIGEgZGVhbCB3aXRoIERpc25leSBpbg0KMjAxNS4gTWFydmVsIHdvdWxkIGJlIGFibGUgdG8gdXNlIFNwaWRlci1NYW4gaW4gdGhlaXIgY2luZW1hdGljDQp1bml2ZXJzZSwgd2hpbGUgU29ueSBrZXB0IGRpc3RyaWJ1dGlvbiByaWdodHMgYW5kIGNyZWF0aXZlIGNvbnRyb2wuIFNvbnkNCnByb2R1Y2VyLCBBbXkgUGFzY2FsLCB3aG8gcGxheWVkIGEgYmlnIHJvbGUgaW4gdGhlIGNyZWF0aW9uIG9mIHRoZQ0KU3BpZGVyLU1hbiBtb3ZpZXMgc2luY2UgMjAwMiwgcHJvZHVjZWQgXCJTcGlkZXItTWFuOiBIb21lY29taW5nXCIgYW5kDQpcIlNwaWRlci1NYW46IEZhciBGcm9tIEhvbWVcIiB3aXRoIEtldmluIEZlaWdlLiBUaGlzIGRlYWwgaGFkIGJlZW4NCnVwaGVsZCBieSBib3RoIHNpZGVzLCB1bnRpbCBTb255IGRlY2lkZWQgdG8gcmV2aXNpdCB0aGUgaWRlYSBvZiBtYWtpbmcNCnRoZWlyIG93biBTcGlkZXItTWFuIGZpbG1zLsKgDQoNClJlY2VudGx5LCBTb255IGhhcyBiZWVuIGRvaW5nIHdlbGwgd2l0aCB0aGVpciBvd24gJ1VuaXZlcnNlIG9mIE1hcnZlbA0KQ2hhcmFjdGVycycuICJWZW5vbSIgbWFkZSBvdmVyIFwkODAwIG1pbGxpb24gd29ybGR3aWRlIGFmdGVyIGJlaW5nDQpyZWxlYXNlZCBpbiAyMDE4LCBhbmQgIlNwaWRlci1NYW46IEZhciBGcm9tIEhvbWUiIG1hZGUgb3ZlciBcJDEgYmlsbGlvbg0KdGhpcyBzdW1tZXIuIFRoZXNlIHN1Y2Nlc3NlcyBoYXZlIGJlZW4gImp1c3QgdGhlIHJlYm91bmQgU29ueSBuZWVkZWQuIg0KU3BpZGVyLU1hbiBpcyBTb255J3MgZ3JlYXRlc3QgcHJvcGVydHksIGFuZCB0aGV5IGFyZSBoaWdobHkgbW90aXZhdGVkIHRvDQprZWVwIGl0IGluIHRoZWlyIGNvbnRyb2wuLiBUaGlzIGlzIHdoeSB0aGV5IGhhZCBzdWNoIGFuIGludGVyZXN0IGluDQp0YWtpbmcgYmFjayB0aGUgY2hhcmFjdGVyLiBBbm90aGVyIHJlYXNvbiB3aHkgdGhlIGRlYWwgd2FzIGJlaW5nDQpyZXZpc2l0ZWQgd2FzIGJlY2F1c2UgRGlzbmV5IHdhbnRlZCBhIDUwLzUwIHN0YWtlIGluIGZ1dHVyZQ0KXCJTcGlkZXItTWFuXCIgbW92aWVzLiBTb255IHdhbnRlZCB0byBrZWVwIHRoZSBkZWFsIGFzIGlzOiB3aGVyZSBNYXJ2ZWwNCnJlY2VpdmVzIHVwIHRvIDUlIG9mIGZpcnN0LWRvbGxhciBncm9zcyBhbmQgYWxsIG1lcmNoYW5kaXNpbmcgcmV2ZW51ZS4NCg0KQXMgb2YgcmlnaHQgbm93LCBubyBuZXcgZGVhbCBoYXMgYmVlbiBtYWRlLiBUaGlzIGluZGljYXRlcyB0aGF0IHVubGVzcw0Kc29tZXRoaW5nIGNoYW5nZXMsIE1hcnZlbCBTdHVkaW9zIHdpbGwgbm90IGJlIGludm9sdmVkIGluIHRoZSBtYWtpbmcgb2YNCm5ldyBTcGlkZXItTWFuIG1vdmllcywgYW5kIG5vIE1DVSBjaGFyYWN0ZXJzIHdpbGwgYmUgcmVmZXJlbmNlZC4gU29ueQ0KaG9wZXMgdGhhdCBEaXJlY3RvciBKb2huIFdhdHRzIGFuZCBzdGFyIFRvbSBIb2xsYW5kIHdpbGwgcmV0dXJuIGZvciB0d28NCm1vcmUgU3BpZGVyLU1hbiBmaWxtcy4gRXZlbiB0aG91Z2ggdGhpcyBmZWVscyBsaWtlIGEgYmlnIGxvc3MgZm9yIGZhbnMsDQp3ZSBzaG91bGQgcmVtZW1iZXIgdGhhdCB0aGVyZSBhcmUgc3RpbGwgbW9yZSBtb3ZpZXMgYmVpbmcgbWFkZSwgYW5kIGV2ZW4NCnRob3VnaCBNYXJ2ZWwgc2VlbXMgdG8gYmUgb3V0IG9mIFNwaWRlci1NYW5cJ3MgbGlmZSByaWdodCBub3csIFNvbnkgaXMNCmhvcGVmdWwgdGhhdCBhIGRlYWwgY291bGQgc3RpbGwgYmUgbWFkZSBpbiB0aGUgZnV0dXJlLsKgDQoNCipcKk5vdGU6IFRoaXMgYXJ0aWNsZSB3YXMgd3JpdHRlbiBiZWZvcmUgdGhlIGFncmVlbWVudCBiZXR3ZWVuIFNvbnkgYW5kDQpEaXNuZXkgdG8ga2VlcCBTcGlkZXJtYW4gaW4gdGhlIE1DVSB3YXMgcmVhY2hlZC4qDQo=";export{G as default};
