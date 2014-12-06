/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'mayhem9.gif', 320, 1472, 0, 0, 0];
  level_images['door'] = ['doors', 'door1.gif', 50, 82, 120, 1128, 6];
  level_images['exit'] = ['ani', 'exit2.gif', 50, 82, 74, 14, 6]; // +34, +44
  level_images['water1'] = ['ani', 'water.gif', 32, 128, 288, 1126, 6];
  level_images['water2'] = ['ani', 'water.gif', 32, 128, 288, 1254, 6];
  level_images['steelblock1'] = ['gfx', 'steelblock10.gif', 48, 48, 272, 1030, 7];
  level_images['steelblock2'] = ['gfx', 'steelblock10.gif', 48, 48, 272, 1078, 7];
  level_images['steelblock3'] = ['gfx', 'steelblock18.gif', 50, 56, 270, 1182, 7];
  level_images['steelblock4'] = ['gfx', 'steelblock10.gif', 48, 48, 274, 1376, 7];
  level_images['steelblock5'] = ['gfx', 'steelblock10.gif', 48, 48, 274, 1424, 7];
  level_images['steelblock6'] = ['gfx', 'steelblock17.gif', 48, 28, 140, 0, 7];
  level_images['steelblock7'] = ['gfx', 'steelblock17.gif', 48, 28, 188, 0, 7];
  level_images['steelblock8'] = ['gfx', 'steelblock17.gif', 48, 28, 236, 0, 7];
  level_images['steelblock9'] = ['gfx', 'steelblock17.gif', 48, 28, 284, 0, 7];
  level_images['steelblock10'] = ['gfx', 'steelblock17.gif', 48, 28, 140, 100, 7];
  level_images['steelblock11'] = ['gfx', 'steelblock17.gif', 48, 28, 188, 100, 7];
  level_images['steelblock12'] = ['gfx', 'steelblock19.gif', 44, 28, 236, 100, 7];
  level_images['steelblock13'] = ['gfx', 'steelblock20.gif', 48, 28, 244, 156, 7];
  level_images['steelblock14'] = ['gfx', 'steelblock20.gif', 48, 28, 244, 354, 7];
  level_images['steelblock15'] = ['gfx', 'steelblock20.gif', 48, 28, 292, 354, 7];
  level_images['steelblock16'] = ['gfx', 'steelblock20.gif', 48, 28, 244, 542, 7];
  level_images['steelblock17'] = ['gfx', 'steelblock20.gif', 48, 28, 292, 542, 7];
  level_images['steelblock18'] = ['gfx', 'steelblock17.gif', 48, 28, -10, 516, 7];
  level_images['steelblock19'] = ['gfx', 'steelblock17.gif', 48, 28, 38, 516, 7];
  level_images['steelblock20'] = ['gfx', 'steelblock17.gif', 48, 28, -26, 654, 7];
  level_images['steelblock21'] = ['gfx', 'steelblock17.gif', 48, 28, 22, 654, 7];
  level_images['steelblock22'] = ['gfx', 'steelblock17.gif', 48, 28, 70, 654, 7];
  level_images['steelblock23'] = ['gfx', 'steelblock17.gif', 48, 28, 118, 654, 7];
  level_images['steelblock24'] = ['gfx', 'steelblock17.gif', 48, 28, 166, 654, 7];
  level_images['steelblock25'] = ['gfx', 'steelblock17.gif', 48, 28, 102, 626, 7];
  level_images['steelblock26'] = ['gfx', 'steelblock21.gif', 46, 28, 30, 196, 7];
  level_images['steelblock27'] = ['gfx', 'steelblock17.gif', 48, 28, 76, 196, 7];
  level_images['steelblock28'] = ['gfx', 'steelblock23.gif', 46, 28, 140, 194, 7];
  level_images['steelblock29'] = ['gfx', 'steelblock21.gif', 46, 28, 30, 274, 7];
  level_images['steelblock30'] = ['gfx', 'steelblock24.gif', 30, 28, 76, 274, 7];
  level_images['steelblock31'] = ['gfx', 'steelblock22.gif', 44, 28, 30, 382, 7];
  level_images['steelblock32'] = ['gfx', 'steelblock17.gif', 48, 28, 74, 382, 7];
  level_images['steelblock33'] = ['gfx', 'steelblock25.gif', 48, 28, 138, 382, 7];
var level_start = 740;
var start_pos = [[122,1154]]; // +2, +26

var level = 'a258e14a55e14a,7a94b134a30e14a55e14a,8a98e14b8a17e14b9a20b6a5e14a53e14a55e14a,a98e14b8a17e14b9a20b5a6e14a53e14a55e14a,a98e14a2b6a17e14a3b6a17b9a5e14a53e14a55e14a,a98e14a3b5a17e14a4b5a17b9a5e14a53e14a55e14a,a98e14a2b9a14e14a3b9a14b6a8e14a53e14a55e14a,a98e14a2b9a14e14a3b9a14b5a9e14a53e14a55e14a,a98e14a5b6a14e14a6b6a11b9a8e14a53e14a55e14a,a98e14a6b5a14e14a7b5a11b9a8e14a53e14a55e14a,a98e14a5b9a11e14a6b9a8b6a11e14a53e14a55e14a,a98e14a5b9a11e14a6b9a8b5a12e14a53e14a55e14a,a98e14a8b6a11e14a9b6a5b9a11e14a53e14a55e14a,a98e14a9b5a11e14a10b5a5b9a11e14a53e14a55e14a,a98e14a8b9a8e14a9b9a2b6a14e14a53e14a55e14a,a98e14a8b9a8e14a9b9a2b5a15e14a53e14a55e14a,a98e14a11b6a8e14a12b14a14e14a53e14a55e14a,a98e14a12b5a8e14a13b13a14e14a53e14a55e14a,a98e14a11b9a5e14a12b11a17e14a53e14a55e14a,a98e14a11b9a5e14a12b10a18e14a53e14a55e14a,a98e14a14b6a5e14a14b9a17e14a53e14a55e14a,a98e14a15b5a5e14a14b9a17e14a53e14a55e14a,a98e14a14b9a2e14a14b10a16e14a53e14a55e14a,2a98e14a17b6a2e14a11b13a16e14a53e14a55e14a,a98e14a18b5a2e14a11b13a16e14a53e14a55e14a,a98e14a17b8e14ba10b6ab9a13e14a53e14a55e14a,a98e14a17b8e13b3a9b5a2b9a13e14a53e14a55e14a,a98e14a20b5e12b5a5b9a4b6a13e14a53e14a55e14a,a98e14a21b4e11b7a4b9a5b5a13e14a53e14a55e14a,a98e14a20b5e10b9a3b6a7b9a10e14b122e14a,a98e14a20b5e9b11a2b5a8b9a10e14b122e14a,a98e14a23b2e8b20a10b6a10e14b122e14a,a98e14a24be7b21a11b5a10e14b122e14a,a98e14a23b2e6b19a13b9a7e14b122e14a,a98e14a23b2e5b19a14b9a7e14b122e14a,a98e14a25e4b21a16b6a7e14b122e14a,a98e14a25e3b23a16b5a7e14b122e14a,a98e14a25e2b25a14b9a4e14a108e28a,a98e14a25eb27a13b9a4e14a108e28a,a98e14a25b29a15b6a4e14a108e28a,a29ia68e14a24b31a15b5a4e14a108e28a,a98e14a23b33a13b9ae14a108e28a,a98e14a22b35a12b9ae14a108e28a,a98e14a21b37a14b6ae14a108e28a,a98e14a20b39a14b5ae14a108e28a,a98e14a19b41a12b7e14a108e28a,a98e14a18b43a11b7e14a108e28a,a98e14a17b108a76e28a,b68a22b28a9b110a76e28a,b68a22b26a11b101a3b6a76e28a,b68a22b26a11b101a4b5a76e28a,b70a18b29a5b106a3b9a73e28a,b72a16b28a6b106a3b9a73e28a,b72a15b26a9b106a6b6a73e28a,b73a15b25a9b106a7b5a73e28a,b72a19b90a10e14a29b9a70e28a,e14a33b3e14a33e14a9b62a9e14a29b9a70e28a,e14a33b3e14a33e14a8b64a8e14a32b6a70e28a,e14a30b6e14a33e14a7b66a7e14a33b5a70e28a,e14a30b6e14a33e14a6b68a6e14a108e28a,e14a30b6e14a33e14a5b70a5e14a108e28a,e14a30b5ae14a33e14a4b72a4e14a122e14a,e14a27b9e14a33e14a3b74a3e14a122e14a,e14a27b9e14a33e14a2b76a2e14a122e14a110b20a,e14a27b6a3e14a33e14ab78ae14a122e14a110b20a,e14a27b5a4e14a33e14b80e14a122e14a110b20a,e14a24b9a3e14a33e13b82e13a122e14a110b20a,e14a24b9a3e14a33e12b84e12a122e14a110b20a,e14a24b6a6e14a33e11b86e11a122e14a110b20a,e14a24b5a7e14a33e10b88e10a122e14a110b20a,e14a21b9a6e14a33e9b90e9a122e14a110b20a,e14a21b9a6e14a33e8b92e8a122e14a110b20a,e14a21b6a9e14a33e7b94e7a122e14a110b20a59b8a,e14a21b5a10e14a33e6b96e6a122e14a110b20a59b8a,e14a18b9a9e14a33e5b98e5a122e14a110b20a59b8a,e14a18b9a9e14a33e4b100e4a122e14a110b20a59b8a,e14a18b6a12e14a33e3b102e3a122e14a110b20a59b8a,e14a18b5a13e14a33e2b104e2a122e14a110b20a59b8a16b5a,e14a15b9a12e14a33eb106ea122e14a110b20a59b8a14b9a,e14a15b9a12e14a33b108a122e14a110b20a59b8a13b11a,e14a15b6a15e14a32b110a121e14a110b20a59b8a13b11a,e14a15b5a16e14a31b112a120e14a93b37a59b8a12b13a,e14a12b9a15e14a30b114a119e14a93b37a23b4a32b8a12b13a,e14a12b9a15e14a29b116a118e14a93b20a7b20a11b7a31b8a12b13a,e14a12b6a18e14a28b118a117e14a93b20a7b20a11b8a30b8a12b13a,e14a12b5a19e14a27b120a116e14a93b20a7b20a10b9a30b8a12b13a,e14a9b9a18e14a26b122a115e14a93b20a7b20a10b10a29b8a12b12a,e14a9b9a18e14a25b125a113e14a93b20a7b21ab2a5b12a2b2a24b8a12b62a,e14a9b6a21e14a24b127a60b9a43e14a93b20a7b24a5b16a24b8a12b63a,e14a9b5a22e14a23b129a59b9a43e14a93b20a7b25a4b17a23b8a12b64a,e14a2b9a25e14a22b131a61b6a43e14a93b20a7b25a4b18a22b8a12b64a,e14a2b9a25e14a21b133a61b5a43e14a93b20a7b27ab20a21b8a12b64a,e14a5b6a25e14a20b135a59b9a40e14a93b20a7b48a21b8a12b63a,e14a6b5a25e14a19b137a58b9a147b20a7b48a21b8a12b64a,e14a5b9a22e14a18b139a60b6a147b20a7b48a21b8a12b66a,e14a5b9a22e14a17b141a60b5a147b20a7b48a21b8a12b67a,e14a8b6a22e14a16b143a58b9a144b20a7b48a21b8a12b66a,e14a9b5a22e14a15b145a57b9a144b20a7b48a21b8a12b65a,e14a8b9a19e14a14b147a59b6a144b20a7b48a21b8a12b64a,e14a8b9a19e14a13b149a59b5a144b20a7b48a21b8a12b62a,e14a11b6a19e14b232a138b20a7b48a21b8a12b61a,e14a12b5a19e14b232a146b67a21b8a12b59a,e14a11b9a16e14b232a146b67a21b8a12b60a,e14a11b9a16e14b232a146b67a21b8a12b61a,e14a14b6a16e14b232a146b67a21b8a12b61a,e14a15b5a16e14b232a146b67a21b8a12b62a,e14a14b9a13e14b232a146b67a21b8a12b62a,e14a14b9a13e14b232a104b5a37b67a21b8a12b63a,e14a17b6a13e14a4b10e14b85e14b43a37e14b9a86b26a36b67a21b8a12b63a,e14a18b5a13e14a3b11e14b85e14b44a36e14b9a81b34a33b67a21b8a12b63a,e14a17b9a10e14a2b12e14b85e14b45a35e14a3b6a80b35a33b67a21b8a12b62a,e14a17b9a10e14ab13e14b85e14b46a34e14a4b5a77b29a3b5a34b67a21b8a12b62a,e14a20b6a10e14b14e14b85e14b47a33e14a3b9a74b29a3b6a33b67a21b8a12b62a,e14a21b5a10e13b15e14b85e14b48a32e14a3b9a75b5a3b20a3b9a30b67a21b8a12b62a,e14a20b9a7e12b16e14b85e14b49a31e14a6b6a74b6a3b20a3b9a30b67a21b8a12b62a,e14a20b9a7e11b17e14b85e14b50a30e14a7b5a71b9a3b20a6b5a31b67a21b8a12b61a,e14a23b6a7e10b18e14b85e14b51a29e14a6b9a68b9a3b20a6b6a30b67a21b8a12b60a,e14a24b5a7e9b19e14b85e14b52a28e14a6b9a69b5a6b20a6b9a27b67a21b8a12b60a,e14a14b18a4e8b20e14b85e14b53a27e14a9b6a68b6a6b20a6b9a27b67a21b8a12b58a,e14a14b18a4e7b21e14b85e14b54a26e14a10b5a65b9a6b20a9b5a28b67a21b8a12b55a,e14a14b6a6b6a4e6b22e14b85e14b55a25e14a9b9a62b9a6b20a9b6a27b67a21b8a12b53a,e14a14b5a8b5a4e5b23e14b85e14b56a24e14a9b9a77b20a9b9a16b75a21b8a12b12a29e28a,e14a11b9a6b9ae4b24e14b85e14b57a23e14a12b6a77b20a9b9a16b75a6e48a28e28a,e14a11b9a6b9ae3b25e14b85e14b58a22e14a13b5a77b20a12b5a17b75a6e48a28e28a69e,e14a11b6a12b6ae2b26e14b85e14b59a21e14a12b9a53b5a16b20a12b6a16b75a6e48a28e28a69e,e14a11b5a14b5aeb27e14b85e14b60a20e14a12b9a52b6a16b20a12b9a13b75a6e48a28e28a69e,e14a8b9a19b28e14b85e14b60a20e14a15b6a49b9a16b20a12b9a13b75a6e48a28e28a69e,e14a8b9a18b29e14b85e14b61a19e14a16b5a49b9a16b20a15b5a14b75a6e48a28e28a69e,e14a8b6a20b30e14b85e14b62a18e14a15b9a47b5a19b20a15b6a13b75a6e48a28e28a69e,e14a8b5a20b31e14b85e14b63a17e14a15b9a46b6a19b20a15b9a10b75a6e48a28e28a69e,e14a5b9a18b32e14b85e14b64a16e14a18b6a43b9a19b20a15b9a10b75a6e48a28e28a69e,e14a5b9a17b33e14b85e14b65a15e14a19b5a43b9a19b20a18b5a11b75a6e48a28e28a69e,e14a5b6a19b133e14b66a14e14a18b9a41b5a22b20a18b6a10b81e48f28e28f69e,e14a5b5a19b134e14b67a13e14a18b9a40b6a22b20a18b9a7b81e48f28e28f69e,e14a2b9a17b135e14b68a12e14a21b6a37b9a22b20a18b9a7b81e48f28e28f69e,e14a2b9a16b136e14b69a11e14a22b5a37b9a22b20a21b5a8b81e48f28e28f69e,e14a2b6a18b137e14b70a10e14a21b9a29b56a21b6a7b81e48f28e28f69e,e14a2b5a18b138e14b71a9e14a21b9a29b56a21b9a4b81e48f28e28f69e,e14b8a16b139e14b72a8e14a24b6a29b56a21b9a4b81e48f28e28f69e,e14b8a15b140e14b73a7e14a25b5a23b91a5b81e48f28e28f69e,e14b5a17b141e14b74a6e14a24b9a20b92a4b81e48f28e28f69e,e14b4a17b142e14b75a5e14a24b9a7b190e48f28e28f69e,e14b5a15b143e14b76a4e14a27b6a7b190e48f28e28f69e,e14b5a14b144e14b77a3e14a13b217e48f28e28f69e,e14b2a16b145e14b78a2e14b230e48f28e28f69e,e14b163e14b80e14b230e48f28e28f69e';