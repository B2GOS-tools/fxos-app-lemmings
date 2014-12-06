/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'fun5.gif', 320, 1696, 0, 0, 0];
  level_images['door'] = ['doors', 'door3.gif', 50, 82, 56, 250, 6];
  level_images['exit'] = ['ani', 'exit4.gif', 46, 76, 216, 1208, 6]; // +30, +40
  level_images['icewater1'] = ['ani', 'icewater.gif', 32, 128, 274, 272, 6];
  level_images['icewater2'] = ['ani', 'icewater.gif', 32, 128, 274, 400, 6];
  level_images['icewater3'] = ['ani', 'icewater.gif', 32, 128, 274, 528, 6];
  level_images['marble1'] = ['gfx', 'marble1.gif', 64, 74, 256, 354, 7];
  level_images['marble2'] = ['gfx', 'marble2.gif', 74, 50, 246, 510, 7];
  level_images['icewater4'] = ['ani', 'icewater.gif', 32, 128, 288, 208, 8];
  level_images['icewater5'] = ['ani', 'icewater.gif', 32, 128, 288, 336, 8];
  level_images['icewater6'] = ['ani', 'icewater.gif', 32, 128, 288, 464, 8];
  level_images['icewater7'] = ['ani', 'icewater.gif', 32, 128, 288, 592, 8];
  level_images['iceberg1'] = ['gfx', 'iceberg1.gif', 46, 90, 274, 208, 9];
  level_images['iceberg2'] = ['gfx', 'iceberg2.gif', 46, 158, 274, 562, 9];
var level_start = 100;
var start_pos = [[58,276]]; // +2, +26

var level = 'a2b585a129b23a86b,ab154a2b430a130b23a84b23a,ab154a3b429a131b23a82b23a,ab7a2b66a5b73a7b60a3b354a141b23a80b23a,b7a3b64a8b72a8b56a10b349a143b23a78b23a,b6a5b62a10b70a10b54a11b348a145b23a76b23a,b5a10b58a11b5ab63a11b5ab48a10b347a147b23a74b23a,a15b58a12b3a3b35a4b22a13b3a3b47a10b11a4b24a2b225ab9ab9ab39ab9ab9a149b23a72b23a,a15b58a13ba6b30a7b21a15ba6b46a24b24a2b224a3b7a3b7a3b37a3b7a3b7a151b23a70b23a,a15b58a23b24a11b19a26b43a25b23a2b223a5b5a5b5a5b35a5b5a5b5a153b23a68b23a,a19b54a26b19a13b18a30b40a25b23a2b222a7b3a7b3a7b33a7b3a7b3a155b23a66b23a,a20b51a31b14a15b8a3b6a34b38a24b23a15b210a5b5a5b5a5b35a5b5a5b3a157b23a64b23a,a22b48a35b8a19b5a5b5a38b18a4b13a25b22a16b196ab9ab3a3b3ab3a3b3ab3a3b3ab19ab9ab3a3b3ab3a3b3a159b23a62b23a,a23b45a65b2a8b3a61b14a25b2a3b16a16b195a3b7a3b3ab3a3b3ab3a3b3ab3a3b17a3b7a3b3ab3a3b3ab3a161b23a60b23a,a23b42a79ba63b13a30b16a15b195a5b5a5b5a5b5a5b5a5b15a5b5a5b5a5b5a163b23a58b23a,a22b39a147b11a32b16a15b194a7b3a7b3a7b3a7b3a7b13a7b3a7b3a7b3a165b23a56b23a,a22b39a147b8a35b16a15b7a2b186a5b5a5b5a5b5a5b5a5b15a5b5a5b5a5b3a167b23a54b23a,a22b7a2b31a147b5a37b16a14b7a3b183ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab9ab3a3b3ab3a3b3ab3a3b3a169b23a52b23a,a21b7a3b31a148b2a39b16a14b6a5b181a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b7a3b3ab3a3b3ab3a3b3ab3a171b23a50b23a,a21b6a5b31a188b16a14b5a10b176a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a173b23a48b23a,a21b5a10b27a188b16a29b175a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a175b23a46b23a,a36b27a188b16a29b176a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a63ba113b23a44b23a,a36b28a187b16a29b173ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a63b3a113b23a42b23a,a36b11a4b13a187b16a36b165a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a63b5a113b23a40b23a,a51b14a186b16a35b165a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a63b3ab3a113b23a38b23a,a52b13a186b16a34b165a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a63b3a3b3a113b23a36b23a,a52b11a188b16a32b168a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a63b3a5b3a113b23a34b23a,a52b8a191b16a31b166ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a63b3a7b3a113b23a32b23a,a53b5a21b3a169b16a29b167a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a63b5a5b5a113b23a30b23a,a54b2a22b5a168b16a30b165a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a63b3ab3a3b3ab3a113b23a28b23a,a77b7a167b16a31b163a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a63b3a3b3ab3a3b3a113b23a26b23a,a77b8a166b16a32b163a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a63b3a5b5a5b3a113b23a24b23a,a76b11a164b16a30b162ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a63b3a7b3a7b3a113b23a22b23a,a76b12a163b16a27b164a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a63b5a5b5a5b5a113b23a20b23a,a75b14a162b16a28b162a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a63b3ab3a3b3ab3a3b3ab3a113b23a18b23a,a75b15a161b16a30b159a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a63b3a3b3ab3a3b3ab3a3b3a113b23a16b23a,a74b17a160b16a31b159a5b5a5b5a5b5a5b3a9b3a5b5a5b5a5b5a5b3a63b3a5b5a5b5a5b3a113b23a14b23a,a74b18a159b16a31b146ab9ab3a3b3ab3a3b3ab3a3b3ab3a3b3a11b3a3b3ab3a3b3ab3a3b3ab3a3b3a63b3a7b3a7b3a7b3a113b23a12b23a,a73b20a158b16a30b146a3b7a3b3ab3a3b3ab3a3b3ab3a3b3ab3a13b3ab3a3b3ab3a3b3ab3a3b3ab3a63b5a5b5a5b5a5b5a113b23a10b23a,a72b23a156b16a30b145a5b5a5b5a5b5a5b5a5b5a15b5a5b5a5b5a5b5a63b3ab3a3b3ab3a3b3ab3a3b3ab3a113b29a2b23a,a72b24a155b16a30b144a7b3a7b3a7b3a7b3a7b3a17b3a7b3a7b3a7b3a63b3a3b3ab3a3b3ab3a3b3ab3a3b3a113b52a,a71b26a154b16a29b146a5b5a5b5a5b5a5b5a5b3a19b3a5b5a5b5a5b3a63b3a5b5a5b5a5b5a5b3a113b50a,a71b27a153b16a29b143ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a21b3a3b3ab3a3b3ab3a3b3a63b3a7b3a7b3a7b3a7b3a113b48a,a70b29a152b16a29b142a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a23b3ab3a3b3ab3a3b3ab3a63b5a5b5a5b5a5b5a5b5a113b46a,a70b31a150b16a33b137a5b5a5b5a5b5a5b5a5b5a25b5a5b5a5b5a63b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a113b44a,a69b33a149b16a34b135a7b3a7b3a7b3a7b3a7b3a27b3a7b3a7b3a63b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a113b42a,a69b34a148b16a35b135a5b5a5b5a5b5a5b5a5b3a29b3a5b5a5b3a63b3a5b5a5b5a5b5a5b5a5b3a113b40a,a68b36a147b16a33b138a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a31b3a3b3ab3a3b3a63b3a7b3a7b3a7b3a7b3a7b3a113b38a,a68b37a146b16a30b142ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a33b3ab3a3b3ab3a63b5a5b5a5b5a5b5a5b5a5b5a113b36a,a67b40a144b16a31b144a5b5a5b5a5b5a5b5a35b5a5b5a63b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a113b34a,a66b42a143b16a33b141a7b3a7b3a7b3a7b3a37b3a7b3a63b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a113b32a,a66b43a142b16a34b141a5b5a5b5a5b5a5b3a39b3a5b3a63b3a5b5a5b5a5b5a5b5a5b5a5b3a111b32a,a65b45a141b16a34b142a3b3ab3a3b3ab3a3b3ab3a3b3a41b3a3b3a63b3a7b3a7b3a7b3a7b3a7b3a7b3a110b31a,a65b46a140b16a33b138a3b3ab3a3b3ab3a3b3ab3a3b3ab3a43b3ab3a63b5a5b5a5b5a5b5a5b5a5b5a5b5a109b31a,a64b48a139b16a33b138a4b5a5b5a5b5a5b5a45b5a63b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a108b31a,a64b49a138b16a33b138a5b3a7b3a7b3a7b3a47b3a63b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a107b31a,a63b50a138b16a32b139a6b3a5b5a5b5a5b3a49ba63b3a5b5a5b5a5b5a5b5a5b5a5b5a5b3a106b31a,a63b50a138b16a32b139a7b3a3b3ab3a3b3ab3a3b3a113b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a105b31a,a62b51a138b16a32b139a8b3ab3a3b3ab3a3b3ab3a113b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a105b29a,a62b51a138b16a38b118a24b5a5b5a5b5a113b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a104b29a,a62b51a138b16a40b116a25b3a7b3a7b3a113b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a103b29a,a62b51a138b16a44b112a26b3a5b5a5b3a113b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a103b27a,a63b50a138b16a49b106a28b3a3b3ab3a3b3a113b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a102b27a,a63b49a139b16a54b99a31b3ab3a3b3ab3a113b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a102b25a,a64b48a139b16a55b92a38b5a5b5a113b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a102b23a,a64b48a139b16a56b74a56b3a7b3a113b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a102b21a,a65b47a139b16a58b72a57b3a5b3a113b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a102b19a,a65b47a139b16a60b70a58b3a3b3a113b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a102b17a,a65b47a139b16a61b69a59b3ab3a113b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a102b16a,a66b45a140b16a61b69a60b5a113b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a101b16a,a66b45a140b16a60b70a61b3a113b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a100b16a,a67b44a140b16a60b70a62ba113b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a99b16a,a67b44a140b16a60b70a175b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a98b16a,a67b44a140b16a59b71a174b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a97b16a,a68b43a140b16a59b71a173b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a96b16a,a68b43a140b16a59b71a172b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a95b16a,a69b328a171b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a94b16a,a69b328a170b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a93b16a,a69b328a169b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a92b16a,a70b327a168b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a91b16a,a70b327a167b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a90b16a,a71b326a126ba39b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a89b16a,a71b326a125b3a37b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a88b16a,a71b326a124b5a35b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a87b16a,a72b326a122b3ab3a33b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a86b16a,a72b327a120b3a3b3a31b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a85b16a,a73b327a118b3a5b3a29b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a84b16a,a73b328a116b3a7b3a27b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a83b16a,a73b329a114b5a5b5a25b5a5b5a5b5a5b5a5b5a5b4a6b3a9b3a5b5a5b5a5b5a5b5a5b5a5b5a82b16a,a74b329a112b3ab3a3b3ab3a23b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a11b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a81b16a,a74b330a110b3a3b3ab3a3b3a21b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a13b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a80b16a,a75b330a108b3a5b5a5b3a19b3a5b5a5b5a5b5a5b5a5b5a5b5a15b5a5b5a5b5a5b5a5b5a5b5a5b3a79b16a,a75b32a221b78a106b3a7b3a7b3a17b3a7b3a7b3a7b3a7b3a7b3a7b3a17b3a7b3a7b3a7b3a7b3a7b3a7b3a78b16a,a75b32a223b77a104b5a5b5a5b5a15b5a5b5a5b5a5b5a5b5a5b5a5b3a19b3a5b5a5b5a5b5a5b5a5b5a5b5a77b16a,a76b31a225b76a102b3ab3a3b3ab3a3b3ab3a13b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a21b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a76b16a,a76b31a225b77a100b3a3b3ab3a3b3ab3a3b3a11b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a23b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a75b16a,a77b30a229b74a98b3a5b5a5b5a5b3a9b3a5b5a5b5a5b5a5b5a5b5a5b5a25b5a5b5a5b5a5b5a5b5a5b5a5b3a74b16a,a77b30a234b70a96b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a27b3a7b3a7b3a7b3a7b3a7b3a7b3a73b16a,a77b30a239b66a94b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a29b3a5b5a5b5a5b5a5b5a5b5a5b5a72b16a,a78b30a238b67a92b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a31b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a71b16a,a78b30a238b68a90b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a33b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a70b16a,a79b30a237b69a88b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a35b5a5b5a5b5a5b5a5b5a5b5a5b3a69b16a,a79b30a237b70a86b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a37b3a7b3a7b3a7b3a7b3a7b3a7b3a68b16a,a79b37a230b71a84b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a39b3a5b5a5b5a5b5a5b5a5b5a5b5a67b16a,a80b36a230b72a82b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a41b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a66b16a,a80b37a217b85a80b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a43b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a65b16a,a80b38a215b87a78b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a45b5a5b5a5b5a5b5a5b5a5b5a5b3a64b16a,a80b39a214b88a76b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a47b3a7b3a7b3a7b3a7b3a7b3a7b3a63b16a,a79b41a212b90a74b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a49b3a5b5a5b5a5b5a5b5a5b5a5b5a62b16a,a76b45a211b91a72b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a51b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a61b16a,a76b47a208b93a70b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a53b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a60b16a,a76b48a207b60a11b23a68b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a55b5a5b5a5b5a5b5a5b5a5b5a5b3a59b16a,a76b49a205b61a12b23a66b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a57b3a7b3a7b3a7b3a7b3a7b3a7b3a58b16a,a76b49a204b62a13b23a64b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b3a59b3a5b5a5b5a5b5a5b5a5b5a5b5a57b16a,a66b59a204b61a15b23a62b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a61b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a56b16a,a66b59a203b62a16b55a28b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a63b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a46b32a,a66b59a203b62a17b54a27b3a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a5b5a65b5a5b5a5b5a5b5a5b5a5b5a5b3a45b32a,a67b58a204b61a18b53a26b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a7b3a67b3a7b3a7b3a7b3a7b3a7b3a7b3a44b32a,a67b58a204b61a19b52a25b5a5b5a5b5a5b3a9b3a5b5a5b5a5b5a5b5a5b5a5b3a69b3a5b5a5b5a5b5a5b5a5b5a5b5a43b32a,a67b58a204b61a20b51a24b3ab3a3b3ab3a3b3ab3a3b3a11b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a71b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a42b32a,a67b59a196ba6b61a21b50a23b3a3b3ab3a3b3ab3a3b3ab3a13b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a73b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a41b32a,a65b65a191b3a5b61a22b49a22b3a5b5a5b5a5b5a15b5a5b5a5b5a5b5a5b5a5b5a75b5a5b5a5b5a5b5a5b5a5b5a5b3a40b32a,a64b66a190b5a3b62a23b48a21b3a7b3a7b3a7b3a17b3a7b3a7b3a7b3a7b3a7b3a77b3a7b3a7b3a7b3a7b3a7b3a7b3a39b32a,a63b67a133b2a54b72a23b47a20b5a5b5a5b5a5b3a19b3a5b5a5b5a5b5a5b5a5b3a40ia38b3a5b5a5b5a5b5a5b5a5b5a5b5a38b32a,a62b68a132b4a51b74a24b46a19b3ab3a3b3ab3a3b3ab3a3b3a21b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a81b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a37b32a,a61b71a130b5a46b79a24b45a18b3a3b3ab3a3b3ab3a3b3ab3a23b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a83b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a36b32a,a60b73a128b7a42b82a25b44a17b3a5b5a5b5a5b5a25b5a5b5a5b5a5b5a5b5a85b5a5b5a5b5a5b5a5b5a5b5a5b3a35b32a,a59b74a128b9a41b82a25b43a16b3a7b3a7b3a7b3a27b3a7b3a7b3a7b3a7b3a87b3a7b3a7b3a7b3a7b3a7b3a7b3a34b32a,a59b74a66b3a58b11a41b81a26b42a15b5a5b5a5b5a5b3a29b3a5b5a5b5a5b5a5b3a89b3a5b5a5b5a5b5a5b5a5b5a5b5a33b32a,a52ba6b75a64b5a56b13a40b81a27b41a14b3ab3a3b3ab3a3b3ab3a3b3a31b3a3b3ab3a3b3ab3a3b3ab3a3b3a91b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a32b32a,a51b3a5b76a61b8a55b14a38b83a27b40a13b3a3b3ab3a3b3ab3a3b3ab3a33b3ab3a3b3ab3a3b3ab3a3b3ab3a93b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3ab3a3b3a31b32a,a50b5a3b77a60b10a53b16a37b83a28b374a,a49b88a57b11a53b18a36b82a29b373a,a47b90a55b14a51b20a36b81a30b372a,a43b93a55b16a50b21a33b83a31b371a,a40b96a54b17a49b23a29b86a32b370a,a41b96a51b20a48b24a29b85a33b369a,a42b95a50b22a46b25a25b90a33b368a,a43b96a47b23a46b25a25b91a33b367a,a44b95a45b26a45b25f25b91a33b367a,a44b95f44b27f45b25f25b92a32b367a,a45b94f43b30f44b24f25b94a30b367a,a46b93f42b31f44b24f25b95a29b367a,a47b92f41b33f43b24f25b96a28b367a,a47b92f41b33f44b23f24b98a27b367a,a47b92f41b33f44b23f23b99a27b367a,a48b91f41b33f45b22f22b100a27b367a,a49b90f40b34f45b22f21b102a,a50b89f40b34f46b21f20b104a,a50b89f40b34f46b21f19b105a,a50b89f159b107a,a49b91f158b108a,a49b92f150b115a,a49b94f147b116a,a47b96f146b117a,a40b104f144b118a,a35b111f142b120a,a34b113f135b127a,a31bab114f135b127a,a30b119f132b130a';