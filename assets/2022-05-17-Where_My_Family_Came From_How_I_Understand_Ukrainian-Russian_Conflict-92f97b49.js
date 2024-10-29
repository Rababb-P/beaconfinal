const G="data:text/markdown;base64,CgpPdmVyIHRoZSBjZW50dXJpZXMsIG1hbnkgY291bnRyaWVzIGJlbGlldmVkIHRoYXQgdGhleSBoYWQgdGhlIHJpZ2h0IHRvCnJ1bGUgVWtyYWluZSAtIExpdGh1YW5pYSwgUG9sYW5kLCBhbmQgUnVzc2lhIGFyZSBqdXN0IGEgZmV3IG9mIHRoZSBtYW55LgpSdXNzaWFuIGxlYWRlciBWbGFkaW1pciBQdXRpbuKAmXMgYmVsaWVmIHRoYXQgVWtyYWluZSBpc27igJl0IGEgbmF0aW9uIGlzIGEKbWFqb3IgY29udHJpYnV0b3IgdG8gaGlzIHVud2FycmFudGVkIGF0dGFjayBhZ2FpbnN0IHRoZSBVa3JhaW5pYW4KcGVvcGxlLiBSdXNzaWEgYW5kIFVrcmFpbmUgaGF2ZSBoYWQgYSBsb25nIGFuZCBjb21wbGV4IGhpc3RvcnksIGFuZAp1bmRlcnN0YW5kaW5nIGl0IGJldHRlciBwcm92aWRlcyBpbXBvcnRhbnQgY29udGV4dCBmb3IgdGhlIHdhciB0b2RheS4KUnVzc2lhbiBpbmp1c3RpY2VzIGFnYWluc3QgVWtyYWluZSBkaWRu4oCZdCBqdXN0IHN0YXJ0IGxhc3QgeWVhciAtIHRoZXnigJl2ZQpiZWVuIGhhcHBlbmluZyBmb3IgYSB2ZXJ5IGxvbmcgdGltZS4KCkdyb3dpbmcgdXAsIEkgaGVhcmQgc3RvcmllcyBvZiB0aGUgdGVycmlibGUgdGhpbmdzIHRoYXQgaGFwcGVuZWQgaW4KVWtyYWluZSwgYnV0IEkgaGFkIG5ldmVyIHJlYWxseSB1bmRlcnN0b29kIHRoZW0uIEJvdGggb2YgbXkgZ3JhbmRwYXJlbnRzCm9uIG15IG1vbeKAmXMgc2lkZSB3ZXJlIGJvcm4gaW4gVWtyYWluZSwgYW5kIGltbWlncmF0ZWQgdG8gQ2FuYWRhIHdoZW4KdGhleSB3ZXJlIHlvdW5nLiBUaGV5IGRpZG7igJl0IGxpdmUgbG9uZyBpbiB0aGUgY291bnRyeSwgYnV0IG15CmdyZWF0LWdyYW5kcGFyZW50cyBkaWQuIEZyb20gMTkyMiB0byAxOTkxLCBVa3JhaW5lIHdhcyB1bmRlciBSdXNzaWHigJlzCnRodW1iIGFzIGEgcGFydCBvZiB0aGUgU292aWV0IFVuaW9uLiBUaGUgbWFzcyBkZWF0aCB0b2xsIGFuZCB0aGUKb3BwcmVzc2lvbiB0aGF0IHRoZSBVa3JhaW5pYW4gcGVvcGxlIHN1ZmZlcmVkIGluZmx1ZW5jZWQgdGhlaXIgZGVzaXJlIHRvCmdldCBvdXQuIFdoZW4gdGhlIFNlY29uZCBXb3JsZCBXYXIgc3RhcnRlZCBhbmQgYm9yZGVycyBsb29zZW5lZCwKVWtyYWluaWFucyBmbGVkLCBjaG9vc2luZyB0byBnbyB0aHJvdWdoIGFjdGl2ZSB3YXIgem9uZXMgcmF0aGVyIHRoYW4Kc3RheSB3aGVyZSB0aGV5IHdlcmVu4oCZdCB3YW50ZWQuIEFtb25nIHRob3NlIHBlb3BsZSB3ZXJlIG15IHlvdW5nIGJhYmEKKGdyYW5kbWEpIGFuZCBkaWRvIChncmFuZHBhKS4KCkZvciBtZSwgdGhlIHN0b3J5IG9mIFVrcmFpbmUgY2FtZSBpbiBzbWFsbCBwaWVjZXMgb2YgbXkgZmFtaWx54oCZcwpoaXN0b3J5LiBNeSBncmVhdCBncmFuZG1vdGhlcuKAmXMgdHdpbiBzaXN0ZXIgd2FzIGEgZnJlZWRvbSBmaWdodGVyLCBhbmQKd2FzIGtpbGxlZCBieSBTb3ZpZXQgZW5mb3JjZXJzLiBGb3IgdGhlIHJlc3Qgb2YgaGVyIGxpZmUsIGhlciBtb3RoZXIKdG9sZCBoZXIgc2hlIHdpc2hlZCB0aGF0IGhlciBicmF2ZSBkYXVnaHRlciB3YXMgdGhlIG9uZSB3aG8gbGl2ZWQKaW5zdGVhZC4gTXkgYmFiYeKAmXMgdW5jbGUgaGFkIHRoZSBmbHUgYW5kIHdhcyB0b28gc2ljayB0byBnbyB0byB3b3JrIG9uZQpkYXksIGFuZCB0aGUgbmV4dCBkYXkgdGhlIHNlY3JldCBwb2xpY2UgdG9vayBoaW0gdG8gYSBHdWxhZywgb25lIG9mIHRoZQpTb3ZpZXQgbGFib3VyIGNhbXBzIHRoYXQgaG91c2VkIG1pbGxpb25zIG9mIHBlb3BsZSBkdXJpbmcgaXRzIHBlYWsuIEhlCmRpZG7igJl0IGdldCBvdXQgdW50aWwgdGhlIDUwcy4gVG8gc2F5IHRoYXQgdGhlIFNvdmlldCBVbmlvbiB3YXNu4oCZdCBhIGdvb2QKcGxhY2UgdG8gbGl2ZSB3b3VsZCBiZSBhbiB1bmRlcnN0YXRlbWVudC4KCkkgZmVlbCBsaWtlIHBlb3BsZSB0b2RheSBjb25zaWRlciBSdXNzaWHigJlzIGludmFzaW9uIG9mIFVrcmFpbmUgdG8gYmUgYW4KaXNvbGF0ZWQgaW5jaWRlbnQsIHRoZSByYW5kb20gd2hpbXMgb2YgYSBtYWRtYW4uIFVrcmFpbmlhbnMga25vdyB0aGF0CmlzbuKAmXQgdHJ1ZS4gUnVzc2lhIGhhcyBjb25zaXN0ZW50bHkgYmVsaWV2ZWQgdGhhdCBVa3JhaW5lIGlzIG5vdCBhCnN0YXRlLiBUaGUgZGltaW5pc2hpbmcgb2YgdGhlIFVrcmFpbmlhbiBsYW5ndWFnZSBhbmQgY3VsdHVyZSB3YXMKY29uc3RhbnQgZHVyaW5nIFNvdmlldCB0aW1lcywgYW5kIGRpZCBub3QgZW5kIHdoZW4gdGhlIFNvdmlldCBVbmlvbgpmZWxsLiBUaGUgZGlzcmVzcGVjdCB0aGF0IFJ1c3NpYSBoYXMgdG93YXJkcyBVa3JhaW5lIHdhcyBvbiBmdWxsIGRpc3BsYXkKZHVyaW5nIHRoZSBhbm5leGF0aW9uIG9mIENyaW1lYSBpbiAyMDE0LCB3aGVuIFJ1c3NpYW4gdHJvb3BzIGp1c3Qgd2Fsa2VkCmludG8gdGhlIHBlbmluc3VsYSBhbmQgdG9vayBpdCwgc2F5aW5nIHRoYXQgaXQgYWx3YXlzIHdhcyBwYXJ0IG9mClJ1c3NpYS4gVGhhdCB3ZWVrZW5kLCBteSBmYW1pbHkgd2VudCB0byBhIHByb3Rlc3QgZG93bnRvd24uIFRoZXkgc3Bva2UKaW4gYWxsIFVrcmFpbmlhbiwgYW5kIEkgb25seSB1bmRlcnN0b29kIGFib3V0IGV2ZXJ5IG90aGVyIHdvcmQgdGhleSB3ZXJlCnNheWluZy4gTXkgY2xlYXJlc3QgbWVtb3J5IGlzIHRoZSBvZGQgc2Vuc2Ugb2YgZm9yZWJvZGluZyBpbiB0aGUgYWlyIC0KdGhlIGtub3dsZWRnZSBtYW55IHBlb3BsZSBzZWVtZWQgdG8gaGF2ZSB0aGF0IHNvbWV0aGluZyB3b3JzZSB3YXMgZ29pbmcKdG8gY29tZS4KCkZvciBVa3JhaW5pYW5zLCB3aGF0IGhhcHBlbmVkIGluIEZlYnJ1YXJ5IHdhc27igJl0IG91dCBvZiB0aGUgYmx1ZS4gSXQgaGFzCmJlZW4gYSBsb25nIHRpbWUgY29taW5nLCBiZWNhdXNlIFJ1c3NpYSB2aWV3cyBVa3JhaW5lIGFzIGEgc3Vic2VydmllbnQKcHJvdmluY2UgdGhhdCBjYW4gYmUgYnJvdWdodCB0byBoZWVsLiBJbiBteSBmYW1pbHkgdG9kYXksIHRoZXJl4oCZcyBhbiBvZGQKbWl4IG9mIGJvdGggc2FkbmVzcyBhbmQgcHJpZGUuIE15IGdyYW5kcGFyZW50cyB3b3JyeSBmb3IgdGhlaXIgY291c2lucwpvdmVyc2VhcywgYnV0IGFsc28gc2hvdyBwcmlkZSBpbiB0aGVpciBob21lIGNvdW50cnnigJlzIHJlc2lzdGFuY2UuIFRoZQpsYXN0IGZldyB3ZWVrcyBoYXZlIHNob3duIHRoYXQgdGhlIGZpZ2h0IGZvciBzb3ZlcmVpZ250eSwgZGVtb2NyYWN5LCBhbmQKZnJlZWRvbSBpcyBhIGNvcm5lcnN0b25lIG9mIHRoZSBVa3JhaW5pYW4gaWRlbnRpdHkuIEluIHRoZSBzdG9yaWVzIG9mIG15CmFuY2VzdG9ycywgSSBzZWUgcGVyc2V2ZXJhbmNlIGluIHRoZSBmYWNlIG9mIHRyYWdlZHkgYW5kIGhvcGUgZm9yIGEKYmV0dGVyIGZ1dHVyZS4gVGhlc2UgYXJlIHRoZSBxdWFsaXRpZXMgb24gZGlzcGxheSBpbiB0aGVpciBob21lIGNvdW50cnkKdG9kYXkuCgpTbGF2YSBVa3JhaW5pICgqR2xvcnkgdG8gVWtyYWluZSopLgoK";export{G as default};