const G="data:text/markdown;base64,ClRoZSB3aW50ZXIgaG9saWRheXMgYXJlIGEgdGltZSB0byBlbWJyYWNlIHRoZSBzcGlyaXQgb2YgdG9nZXRoZXJuZXNzLCBiZQptZXJyeSwgYW5kIHNwZW5kIHRpbWUgd2l0aCBmYW1pbHkuIFVuZm9ydHVuYXRlbHksIHNvbWV0aGluZyBoYXBwZW5lZCBpbgpOb3ZlbWJlciB0aGF0IGhhcyBxdWlja2x5IGJlY29tZSBvbmUgb2YgdGhlIG1vc3QgaGVhdGVkIGlzc3VlcyBpbiBDYW5hZGEKKGFuZCBjb3VsZCBsZWFkIHRvIGF3a3dhcmQgY29udmVyc2F0aW9ucyB3aXRoIHRoZSBleHRlbmRlZCBmYW1pbHkgYXJvdW5kCnRoZSBkaW5uZXIgdGFibGUpLiBUaGlzIGV2ZW50IHdhcyB0aGUgZmlyaW5nIG9mIERvbiBDaGVycnkuIFlvdSd2ZQpwcm9iYWJseSBoZWFyZCBhYm91dCB0aGlzLCBidXQgaW4gY2FzZSB5b3UgaGF2ZW4ndCwgaGVyZSBpcyBhIGJyaWVmCnJ1bmRvd24gb2Ygd2hhdCBoYXBwZW5lZC4gT24gUmVtZW1icmFuY2UgRGF5LCB0aGUgODUteWVhci1vbGQgTkhMCmNvbW1lbnRhdG9yIHdlbnQgYWZ0ZXIgaW1taWdyYW50cyBpbiBUb3JvbnRvIGFuZCBNaXNzaXNzYXVnYSwgYWNjdXNpbmcKdGhlbSBvZiBub3Qgd2VhcmluZyBwb3BwaWVzIGFuZCBub3QgaG9ub3VyaW5nIENhbmFkYSdzIHZldGVyYW5zLgpVbmRvdWJ0ZWRseSB0aGUgcGFydCB0aGF0IGRyZXcgdGhlIG1vc3QgY3JpdGljaXNtIHdhcyBoaXMgdXNlIG9mIHRoZQp3b3JkcyAieW91IHBlb3BsZS4iCgpUaGUgc3RhdGVtZW50IHF1aWNrbHkgZHJldyB3aWRlc3ByZWFkIGNyaXRpY2lzbSwgYW5kIFNwb3J0c25ldCBmaXJlZCBEb24KQ2hlcnJ5LiBEb24gQ2hlcnJ5LCB0aHJvdWdob3V0IGhpcyBoaXN0b3J5IGFzIGEgYnJvYWRjYXN0ZXIsIGhhcyBoYWQgYQpoaXN0b3J5IG9mIG1ha2luZyB2ZXJ5IGNvbnRyb3ZlcnNpYWwgc3RhdGVtZW50cy4gVGhlc2UgaW5zdGFuY2VzIGluY2x1ZGUKdGhlIHRpbWUgd2hlbiBoZSBjb21wbGFpbmVkIGFib3V0ICJ3b21cW2VcXW4geWFwcGluZyBhd2F5IiBhdCBob2NrZXkKZ2FtZXMgb3Igd2hlbiBoZSBzYWlkIHZ1bGdhciB0aGluZ3MgYWJvdXQgTGliZXJhbHMgYXQgdGhlIDIwMTAgaW5hdWd1cmFsCm1lZXRpbmcgb2YgVG9yb250bydzIG5ldyBjaXR5IGNvdW5jaWwsIGRlc2NyaWJpbmcgdGhlIExpYmVyYWwgbWVkaWEgYXMKImxlZnQtd2luZyBwaW5rb3MiLCBhbmQgImtvb2tzIi4KCk9uZSBvZiB0aGUgdGhpbmdzIHRoYXQgbWF5IGhhdmUgY29udHJpYnV0ZWQgdG8gQ2hlcnJ5J3MgZmlyaW5nIHdhcyBoaXMKdW53aWxsaW5nbmVzcyB0byBhcG9sb2dpemUuIEluIGFuIGludGVydmlldyBoZSBkaWQgd2l0aCBGb3ggTmV3cywgaGUKc2FpZCB0aGF0IGhlIG1pZ2h0IGhhdmUgdXNlZCBkaWZmZXJlbnQgd29yZGluZyBpZiBoZSBjb3VsZCBoYXZlIGRvbmUgaXQKb3ZlciwgYnV0IGNhbWUgbm93aGVyZSBuZWFyIGdpdmluZyBhIGZvcm1hbCBhcG9sb2d5LgoKTm90IG9ubHkgd2VyZSBDaGVycnkncyBjb21tZW50cyBvZmZlbnNpdmUsIGJ1dCB0aGV5IHdlcmUgaW5hY2N1cmF0ZSBhbmQKY291bnRlcnByb2R1Y3RpdmUuIFdoaWxlIHRoZSBzZW50aW1lbnQgb2YgZ2V0dGluZyBwZW9wbGUgdG8gYXBwcmVjaWF0ZQphbGwgdGhhdCBvdXIgdmV0ZXJhbnMgaGF2ZSBzYWNyaWZpY2VkIGZvciBDYW5hZGEgaXMgZ29vZCwgQ2hlcnJ5IGZhaWxlZAp0byB0YWtlIGludG8gYWNjb3VudCB0aGF0IGltbWlncmFudHMgYXJlIGFsc28gcGFydCBvZiB0aGUgQ2FuYWRpYW4KbWlsaXRhcnkuIFNlcmdlYW50IFN0ZXBoZW4gVGhvbWFzLCAzNywgaXMgYSBmaXJzdC1nZW5lcmF0aW9uIENhbmFkaWFuCndpdGggcGFyZW50cyBmcm9tIEd1eWFuYSwgd2hvIHNlcnZlZCB0d28gdG91cnMgaW4gQWZnaGFuaXN0YW4sIGFuZCB3YXMKc2hvY2tlZCBieSBDaGVycnkncyBjb21tZW50cy4gSGUgc2FpZDogIkkgZG9uJ3QgdGhpbmsgaGUncyByZWFsaXplZCBob3cKbXVjaCB0aGUgbWlsaXRhcnkgaGFzIGNoYW5nZWQgb3ZlciB0aGUgbGFzdCBkZWNhZGUgb3IgdHdvLiIKClRoZSByZWFzb24gRG9uIENoZXJyeSB3YXMgZmlyZWQgd2FzIHRoYXQgaGlzIGNvbW1lbnRzLCB3aGV0aGVyCmludGVudGlvbmFsIG9yIHVuaW50ZW50aW9uYWwgKGFzIGhpcyBzdXBwb3J0ZXJzIGNsYWltKSwgaHVydCBwZW9wbGUuIEhpcwpyYWNpc3QsIHNleGlzdCwgYW5kIHJ1ZGUgY29tbWVudHMgdGhyb3VnaG91dCB0aGUgeWVhcnMgbWF5IGhhdmUgYmVlbiBmZXcKYW5kIGZhciBiZXR3ZWVuLCBidXQgdGhlIGZhY3QgdGhhdCBoZSB3YXMgdW53aWxsaW5nIHRvIGFwb2xvZ2l6ZSBzYXlzIGEKbG90IGFib3V0IGhpcyBjaGFyYWN0ZXIuIEhpcyBmaXJpbmcgaXMgYSBzdGVwcGluZyBzdG9uZSBpbiBzbG93bHkKZ2V0dGluZyByaWQgb2YgdGhlIHZvaWNlcyBvZiBkaXNjcmltaW5hdGlvbiBiZXR0ZXIgbGVmdCBpbiB0aGUgcGFzdC4gT24KdGhpcyBob2xpZGF5LCBpbiB0aGUgc3Bpcml0IG9mIHRvZ2V0aGVybmVzcywgd2Ugc2hvdWxkIGFsbCByZWNvZ25pemUKd2hhdCBDaGVycnkgY291bGQgbm90IC0gdGhhdCBubyBtYXR0ZXIgd2hhdCBjb3VudHJ5IHdlIHdlcmUgYm9ybiBpbiwgd2UKYXJlIGFsbCBDYW5hZGlhbi4KCkltYWdlIFNvdXJjZTogKltcIkhvY2tleSBOaWdodCBpbgpDYW5hZGFcIl0oaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvZ2FsbGVyeS8zNDU1NzExL0hvY2tleS1OaWdodC1pbi1DYW5hZGEpCmJ5IEZyYW5jbyBCYXJyb2V0YSBpcyBsaWNlbnNlZCB1bmRlciBbQ0MgQlktTkMtTkQgNC4wCl0oaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLW5kLzQuMC8/cmVmPWNjc2VhcmNoJmF0eXBlPXJpY2gpKgo=";export{G as default};