var h;
h ||= typeof Module != 'undefined' ? Module : {};
h.Wf || (h.Wf = 0);
h.Wf++;
(()=>{
    var a = "undefined" != typeof ENVIRONMENT_IS_WASM_WORKER && ENVIRONMENT_IS_WASM_WORKER;
    "undefined" != typeof ENVIRONMENT_IS_PTHREAD && ENVIRONMENT_IS_PTHREAD || a || function(b) {
        function c(p, r, t) {
            var w = new XMLHttpRequest;
            w.open("GET", p, !0);
            w.responseType = "arraybuffer";
            w.onprogress = function(D) {
                var E = r;
                D.total && (E = D.total);
                if (D.loaded) {
                    w.bf ? h.wf[p].loaded = D.loaded : (w.bf = !0,
                    h.wf || (h.wf = {}),
                    h.wf[p] = {
                        loaded: D.loaded,
                        total: E
                    });
                    var I = E = D = 0, ca;
                    for (ca in h.wf) {
                        var db = h.wf[ca];
                        D += db.total;
                        E += db.loaded;
                        I++
                    }
                    D = Math.ceil(D * h.Wf / I);
                    h.setStatus?.(`Downloading data... (${E}/${D})`)
                } else
                    h.wf || h.setStatus?.("Downloading data...")
            }
            ;
            w.onerror = function() {
                throw Error("NetworkError for: " + p);
            }
            ;
            w.onload = function() {
                if (200 == w.status || 304 == w.status || 206 == w.status || 0 == w.status && w.response)
                    t(w.response);
                else
                    throw Error(w.statusText + " : " + w.responseURL);
            }
            ;
            w.send(null)
        }
        function d(p) {
            console.error("package error:", p)
        }
        function e(p) {
            function r(E, I, ca) {
                this.start = E;
                this.end = I;
                this.audio = ca
            }
            function t(E) {
                if (!E)
                    throw "Loading data file failed." + Error().stack;
                if (E.constructor.name !== ArrayBuffer.name)
                    throw "bad input to processPackageData" + Error().stack;
                E = new Uint8Array(E);
                r.prototype.Tf = E;
                E = b.files;
                for (var I = 0; I < E.length; ++I)
                    r.prototype.bf[E[I].filename].onload();
                p.removeRunDependency("datafile_index.data")
            }
            p.FS_createPath("/", "data", !0, !0);
            p.FS_createPath("/data", "Npc", !0, !0);
            p.FS_createPath("/data", "Stage", !0, !0);
            p.FS_createPath("/data", "StageMeta", !0, !0);
            p.FS_createPath("/data", "endpic", !0, !0);
            p.FS_createPath("/data", "org", !0, !0);
            p.FS_createPath("/data", "pxt", !0, !0);
            r.prototype = {
                bf: {},
                open: function(E, I) {
                    this.name = I;
                    this.bf[I] = this;
                    p.addRunDependency(`fp ${this.name}`)
                },
                onload: function() {
                    this.finish(this.Tf.subarray(this.start, this.end))
                },
                finish: function(E) {
                    p.FS_createDataFile(this.name, null, E, !0, !0, !0);
                    p.removeRunDependency(`fp ${this.name}`);
                    this.bf[this.name] = null
                }
            };
            for (var w = b.files, D = 0; D < w.length; ++D)
                (new r(w[D].start,w[D].end,w[D].audio || 0)).open("GET", w[D].filename);
            p.addRunDependency("datafile_index.data");
            p.tg || (p.tg = {});
            p.tg["https://tdataserver.netlify.app/gdata/Q2F2ZSBTdG9yeQ==/index.data"] = {
                nh: !1
            };
            n ? (t(n),
            n = null) : l = t
        }
        "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
        "function" !== typeof h.locateFilePackage || h.locateFile || (h.locateFile = h.locateFilePackage,
        k("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
        var f = h.locateFile ? h.locateFile("https://tdataserver.netlify.app/gdata/Q2F2ZSBTdG9yeQ==/index.data", "") : "https://tdataserver.netlify.app/gdata/Q2F2ZSBTdG9yeQ==/index.data"
          , g = b.remote_package_size
          , l = null
          , n = h.getPreloadedPackage ? h.getPreloadedPackage(f, g) : null;
        n || c(f, g, function(p) {
            l ? (l(p),
            l = null) : n = p
        }, d);
        h.calledRun ? e(h) : (h.preRun || (h.preRun = []),
        h.preRun.push(e))
    }({
        files: [{
            filename: "/data/Arms.pbm",
            start: 0,
            end: 32126
        }, {
            filename: "/data/ArmsImage.pbm",
            start: 32126,
            end: 34300
        }, {
            filename: "/data/ArmsItem.tsc",
            start: 34300,
            end: 43605
        }, {
            filename: "/data/Bullet.pbm",
            start: 43605,
            end: 71891
        }, {
            filename: "/data/Caret.pbm",
            start: 71891,
            end: 110417
        }, {
            filename: "/data/Credit.tsc",
            start: 110417,
            end: 117988
        }, {
            filename: "/data/Face.pbm",
            start: 117988,
            end: 188194
        }, {
            filename: "/data/Face_0.pbm",
            start: 188194,
            end: 258392
        }, {
            filename: "/data/Face_1.pbm",
            start: 258392,
            end: 328590
        }, {
            filename: "/data/Face_2.pbm",
            start: 328590,
            end: 398788
        }, {
            filename: "/data/Fade.pbm",
            start: 398788,
            end: 399882
        }, {
            filename: "/data/Head.tsc",
            start: 399882,
            end: 401343
        }, {
            filename: "/data/ItemImage.pbm",
            start: 401343,
            end: 417853
        }, {
            filename: "/data/Loading.pbm",
            start: 417853,
            end: 417987
        }, {
            filename: "/data/MyChar.pbm",
            start: 417987,
            end: 424513
        }, {
            filename: "/data/Npc/Npc0.pbm",
            start: 424513,
            end: 425151
        }, {
            filename: "/data/Npc/NpcAlmo1.pbm",
            start: 425151,
            end: 463677
        }, {
            filename: "/data/Npc/NpcAlmo2.pbm",
            start: 463677,
            end: 502203
        }, {
            filename: "/data/Npc/NpcBallos.pbm",
            start: 502203,
            end: 540729
        }, {
            filename: "/data/Npc/NpcBllg.pbm",
            start: 540729,
            end: 556215
        }, {
            filename: "/data/Npc/NpcCemet.pbm",
            start: 556215,
            end: 574261
        }, {
            filename: "/data/Npc/NpcCent.pbm",
            start: 574261,
            end: 605107
        }, {
            filename: "/data/Npc/NpcCurly.pbm",
            start: 605107,
            end: 615473
        }, {
            filename: "/data/Npc/NpcDark.pbm",
            start: 615473,
            end: 620719
        }, {
            filename: "/data/Npc/NpcDr.pbm",
            start: 620719,
            end: 659245
        }, {
            filename: "/data/Npc/NpcEggs1.pbm",
            start: 659245,
            end: 677291
        }, {
            filename: "/data/Npc/NpcEggs2.pbm",
            start: 677291,
            end: 697897
        }, {
            filename: "/data/Npc/NpcFrog.pbm",
            start: 697897,
            end: 736423
        }, {
            filename: "/data/Npc/NpcGuest.pbm",
            start: 736423,
            end: 796389
        }, {
            filename: "/data/Npc/NpcHell.pbm",
            start: 796389,
            end: 822115
        }, {
            filename: "/data/Npc/NpcHeri.pbm",
            start: 822115,
            end: 842721
        }, {
            filename: "/data/Npc/NpcIronH.pbm",
            start: 842721,
            end: 854367
        }, {
            filename: "/data/Npc/NpcIsland.pbm",
            start: 854367,
            end: 867293
        }, {
            filename: "/data/Npc/NpcKings.pbm",
            start: 867293,
            end: 869723
        }, {
            filename: "/data/Npc/NpcMaze.pbm",
            start: 869723,
            end: 900569
        }, {
            filename: "/data/Npc/NpcMiza.pbm",
            start: 900569,
            end: 939095
        }, {
            filename: "/data/Npc/NpcMoon.pbm",
            start: 939095,
            end: 959701
        }, {
            filename: "/data/Npc/NpcOmg.pbm",
            start: 959701,
            end: 979027
        }, {
            filename: "/data/Npc/NpcPlant.pbm",
            start: 979027,
            end: 986833
        }, {
            filename: "/data/Npc/NpcPress.pbm",
            start: 986833,
            end: 1025359
        }, {
            filename: "/data/Npc/NpcPriest.pbm",
            start: 1025359,
            end: 1063885
        }, {
            filename: "/data/Npc/NpcRavil.pbm",
            start: 1063885,
            end: 1090891
        }, {
            filename: "/data/Npc/NpcRed.pbm",
            start: 1090891,
            end: 1114057
        }, {
            filename: "/data/Npc/NpcRegu.pbm",
            start: 1114057,
            end: 1191943
        }, {
            filename: "/data/Npc/NpcSand.pbm",
            start: 1191943,
            end: 1220229
        }, {
            filename: "/data/Npc/NpcStream.pbm",
            start: 1220229,
            end: 1221379
        }, {
            filename: "/data/Npc/NpcSym.pbm",
            start: 1221379,
            end: 1259905
        }, {
            filename: "/data/Npc/NpcToro.pbm",
            start: 1259905,
            end: 1283067
        }, {
            filename: "/data/Npc/NpcTwinD.pbm",
            start: 1283067,
            end: 1306233
        }, {
            filename: "/data/Npc/NpcWeed.pbm",
            start: 1306233,
            end: 1344759
        }, {
            filename: "/data/Npc/NpcX.pbm",
            start: 1344759,
            end: 1383285
        }, {
            filename: "/data/Stage/0.pxa",
            start: 1383285,
            end: 1383541
        }, {
            filename: "/data/Stage/0.pxe",
            start: 1383541,
            end: 1383741
        }, {
            filename: "/data/Stage/0.pxm",
            start: 1383741,
            end: 1384169
        }, {
            filename: "/data/Stage/0.tsc",
            start: 1384169,
            end: 1386937
        }, {
            filename: "/data/Stage/555.pxe",
            start: 1386937,
            end: 1386945
        }, {
            filename: "/data/Stage/Almond.pxa",
            start: 1386945,
            end: 1387201
        }, {
            filename: "/data/Stage/Almond.pxe",
            start: 1387201,
            end: 1387653
        }, {
            filename: "/data/Stage/Almond.pxm",
            start: 1387653,
            end: 1390061
        }, {
            filename: "/data/Stage/Almond.tsc",
            start: 1390061,
            end: 1396449
        }, {
            filename: "/data/Stage/Ballo1.pxe",
            start: 1396449,
            end: 1396625
        }, {
            filename: "/data/Stage/Ballo1.pxm",
            start: 1396625,
            end: 1397753
        }, {
            filename: "/data/Stage/Ballo1.tsc",
            start: 1397753,
            end: 1399323
        }, {
            filename: "/data/Stage/Ballo2.pxe",
            start: 1399323,
            end: 1399415
        }, {
            filename: "/data/Stage/Ballo2.pxm",
            start: 1399415,
            end: 1401019
        }, {
            filename: "/data/Stage/Ballo2.tsc",
            start: 1401019,
            end: 1402725
        }, {
            filename: "/data/Stage/Barr.pxa",
            start: 1402725,
            end: 1402981
        }, {
            filename: "/data/Stage/Barr.pxe",
            start: 1402981,
            end: 1403145
        }, {
            filename: "/data/Stage/Barr.pxm",
            start: 1403145,
            end: 1403489
        }, {
            filename: "/data/Stage/Barr.tsc",
            start: 1403489,
            end: 1406761
        }, {
            filename: "/data/Stage/Blcny1.pxe",
            start: 1406761,
            end: 1407297
        }, {
            filename: "/data/Stage/Blcny1.pxm",
            start: 1407297,
            end: 1416905
        }, {
            filename: "/data/Stage/Blcny1.tsc",
            start: 1416905,
            end: 1417975
        }, {
            filename: "/data/Stage/Blcny2.pxe",
            start: 1417975,
            end: 1418319
        }, {
            filename: "/data/Stage/Blcny2.pxm",
            start: 1418319,
            end: 1427927
        }, {
            filename: "/data/Stage/Blcny2.tsc",
            start: 1427927,
            end: 1430817
        }, {
            filename: "/data/Stage/Cave.pxa",
            start: 1430817,
            end: 1431073
        }, {
            filename: "/data/Stage/Cave.pxe",
            start: 1431073,
            end: 1432137
        }, {
            filename: "/data/Stage/Cave.pxm",
            start: 1432137,
            end: 1434845
        }, {
            filename: "/data/Stage/Cave.tsc",
            start: 1434845,
            end: 1435633
        }, {
            filename: "/data/Stage/Cemet.pxe",
            start: 1435633,
            end: 1435905
        }, {
            filename: "/data/Stage/Cemet.pxm",
            start: 1435905,
            end: 1436713
        }, {
            filename: "/data/Stage/Cemet.tsc",
            start: 1436713,
            end: 1437560
        }, {
            filename: "/data/Stage/Cent.pxa",
            start: 1437560,
            end: 1437816
        }, {
            filename: "/data/Stage/Cent.pxe",
            start: 1437816,
            end: 1439564
        }, {
            filename: "/data/Stage/Cent.pxm",
            start: 1439564,
            end: 1453972
        }, {
            filename: "/data/Stage/Cent.tsc",
            start: 1453972,
            end: 1463720
        }, {
            filename: "/data/Stage/CentW.pxe",
            start: 1463720,
            end: 1463872
        }, {
            filename: "/data/Stage/CentW.pxm",
            start: 1463872,
            end: 1464216
        }, {
            filename: "/data/Stage/CentW.tsc",
            start: 1464216,
            end: 1465183
        }, {
            filename: "/data/Stage/Chako.pxe",
            start: 1465183,
            end: 1465299
        }, {
            filename: "/data/Stage/Chako.pxm",
            start: 1465299,
            end: 1465643
        }, {
            filename: "/data/Stage/Chako.tsc",
            start: 1465643,
            end: 1467366
        }, {
            filename: "/data/Stage/Clock.pxe",
            start: 1467366,
            end: 1467422
        }, {
            filename: "/data/Stage/Clock.pxm",
            start: 1467422,
            end: 1467766
        }, {
            filename: "/data/Stage/Clock.tsc",
            start: 1467766,
            end: 1468361
        }, {
            filename: "/data/Stage/Comu.pxe",
            start: 1468361,
            end: 1468513
        }, {
            filename: "/data/Stage/Comu.pxm",
            start: 1468513,
            end: 1468857
        }, {
            filename: "/data/Stage/Comu.tsc",
            start: 1468857,
            end: 1470909
        }, {
            filename: "/data/Stage/Cook.pxm",
            start: 1470909,
            end: 1471253
        }, {
            filename: "/data/Stage/Cthu.pxe",
            start: 1471253,
            end: 1471369
        }, {
            filename: "/data/Stage/Cthu.pxm",
            start: 1471369,
            end: 1471713
        }, {
            filename: "/data/Stage/Cthu.tsc",
            start: 1471713,
            end: 1472292
        }, {
            filename: "/data/Stage/Cthu2.pxe",
            start: 1472292,
            end: 1472504
        }, {
            filename: "/data/Stage/Cthu2.pxm",
            start: 1472504,
            end: 1472848
        }, {
            filename: "/data/Stage/Cthu2.tsc",
            start: 1472848,
            end: 1473107
        }, {
            filename: "/data/Stage/Curly.pxe",
            start: 1473107,
            end: 1473355
        }, {
            filename: "/data/Stage/Curly.pxm",
            start: 1473355,
            end: 1473699
        }, {
            filename: "/data/Stage/Curly.tsc",
            start: 1473699,
            end: 1478462
        }, {
            filename: "/data/Stage/CurlyS.pxe",
            start: 1478462,
            end: 1478578
        }, {
            filename: "/data/Stage/CurlyS.pxm",
            start: 1478578,
            end: 1478922
        }, {
            filename: "/data/Stage/CurlyS.tsc",
            start: 1478922,
            end: 1479538
        }, {
            filename: "/data/Stage/Dark.pxe",
            start: 1479538,
            end: 1479654
        }, {
            filename: "/data/Stage/Dark.pxm",
            start: 1479654,
            end: 1479998
        }, {
            filename: "/data/Stage/Dark.tsc",
            start: 1479998,
            end: 1480518
        }, {
            filename: "/data/Stage/Drain.pxe",
            start: 1480518,
            end: 1480706
        }, {
            filename: "/data/Stage/Drain.pxm",
            start: 1480706,
            end: 1481050
        }, {
            filename: "/data/Stage/Drain.tsc",
            start: 1481050,
            end: 1482363
        }, {
            filename: "/data/Stage/EgEnd1.pxe",
            start: 1482363,
            end: 1482467
        }, {
            filename: "/data/Stage/EgEnd1.pxm",
            start: 1482467,
            end: 1482811
        }, {
            filename: "/data/Stage/EgEnd1.tsc",
            start: 1482811,
            end: 1483037
        }, {
            filename: "/data/Stage/EgEnd2.pxe",
            start: 1483037,
            end: 1483141
        }, {
            filename: "/data/Stage/EgEnd2.pxm",
            start: 1483141,
            end: 1483485
        }, {
            filename: "/data/Stage/EgEnd2.tsc",
            start: 1483485,
            end: 1483711
        }, {
            filename: "/data/Stage/Egg1.pxe",
            start: 1483711,
            end: 1483755
        }, {
            filename: "/data/Stage/Egg1.pxm",
            start: 1483755,
            end: 1484099
        }, {
            filename: "/data/Stage/Egg1.tsc",
            start: 1484099,
            end: 1484557
        }, {
            filename: "/data/Stage/Egg6.pxe",
            start: 1484557,
            end: 1484613
        }, {
            filename: "/data/Stage/Egg6.pxm",
            start: 1484613,
            end: 1484957
        }, {
            filename: "/data/Stage/Egg6.tsc",
            start: 1484957,
            end: 1485338
        }, {
            filename: "/data/Stage/EggIn.pxa",
            start: 1485338,
            end: 1485594
        }, {
            filename: "/data/Stage/EggR.pxe",
            start: 1485594,
            end: 1485986
        }, {
            filename: "/data/Stage/EggR.pxm",
            start: 1485986,
            end: 1486330
        }, {
            filename: "/data/Stage/EggR.tsc",
            start: 1486330,
            end: 1488097
        }, {
            filename: "/data/Stage/EggR2.pxe",
            start: 1488097,
            end: 1488297
        }, {
            filename: "/data/Stage/EggR2.pxm",
            start: 1488297,
            end: 1488641
        }, {
            filename: "/data/Stage/EggR2.tsc",
            start: 1488641,
            end: 1489433
        }, {
            filename: "/data/Stage/EggX.pxa",
            start: 1489433,
            end: 1489689
        }, {
            filename: "/data/Stage/EggX.pxe",
            start: 1489689,
            end: 1489817
        }, {
            filename: "/data/Stage/EggX.pxm",
            start: 1489817,
            end: 1490161
        }, {
            filename: "/data/Stage/EggX.tsc",
            start: 1490161,
            end: 1492661
        }, {
            filename: "/data/Stage/EggX2.pxe",
            start: 1492661,
            end: 1492801
        }, {
            filename: "/data/Stage/EggX2.pxm",
            start: 1492801,
            end: 1493145
        }, {
            filename: "/data/Stage/EggX2.tsc",
            start: 1493145,
            end: 1495867
        }, {
            filename: "/data/Stage/Eggs.pxa",
            start: 1495867,
            end: 1496123
        }, {
            filename: "/data/Stage/Eggs.pxe",
            start: 1496123,
            end: 1497403
        }, {
            filename: "/data/Stage/Eggs.pxm",
            start: 1497403,
            end: 1502211
        }, {
            filename: "/data/Stage/Eggs.tsc",
            start: 1502211,
            end: 1505251
        }, {
            filename: "/data/Stage/Eggs2.pxe",
            start: 1505251,
            end: 1506483
        }, {
            filename: "/data/Stage/Eggs2.pxm",
            start: 1506483,
            end: 1511291
        }, {
            filename: "/data/Stage/Eggs2.tsc",
            start: 1511291,
            end: 1512632
        }, {
            filename: "/data/Stage/Fall.pxa",
            start: 1512632,
            end: 1512888
        }, {
            filename: "/data/Stage/Fall.pxe",
            start: 1512888,
            end: 1512968
        }, {
            filename: "/data/Stage/Fall.pxm",
            start: 1512968,
            end: 1514176
        }, {
            filename: "/data/Stage/Fall.tsc",
            start: 1514176,
            end: 1516879
        }, {
            filename: "/data/Stage/Frog.pxe",
            start: 1516879,
            end: 1517031
        }, {
            filename: "/data/Stage/Frog.pxm",
            start: 1517031,
            end: 1517459
        }, {
            filename: "/data/Stage/Frog.tsc",
            start: 1517459,
            end: 1518984
        }, {
            filename: "/data/Stage/Gard.pxa",
            start: 1518984,
            end: 1519240
        }, {
            filename: "/data/Stage/Gard.pxe",
            start: 1519240,
            end: 1519440
        }, {
            filename: "/data/Stage/Gard.pxm",
            start: 1519440,
            end: 1519928
        }, {
            filename: "/data/Stage/Gard.tsc",
            start: 1519928,
            end: 1523539
        }, {
            filename: "/data/Stage/Hell.pxa",
            start: 1523539,
            end: 1523795
        }, {
            filename: "/data/Stage/Hell1.pxe",
            start: 1523795,
            end: 1524439
        }, {
            filename: "/data/Stage/Hell1.pxm",
            start: 1524439,
            end: 1526547
        }, {
            filename: "/data/Stage/Hell1.tsc",
            start: 1526547,
            end: 1527941
        }, {
            filename: "/data/Stage/Hell2.pxe",
            start: 1527941,
            end: 1528477
        }, {
            filename: "/data/Stage/Hell2.pxm",
            start: 1528477,
            end: 1531045
        }, {
            filename: "/data/Stage/Hell2.tsc",
            start: 1531045,
            end: 1531952
        }, {
            filename: "/data/Stage/Hell3.pxe",
            start: 1531952,
            end: 1533412
        }, {
            filename: "/data/Stage/Hell3.pxm",
            start: 1533412,
            end: 1535980
        }, {
            filename: "/data/Stage/Hell3.tsc",
            start: 1535980,
            end: 1538623
        }, {
            filename: "/data/Stage/Hell4.pxe",
            start: 1538623,
            end: 1538715
        }, {
            filename: "/data/Stage/Hell4.pxm",
            start: 1538715,
            end: 1539395
        }, {
            filename: "/data/Stage/Hell4.tsc",
            start: 1539395,
            end: 1539854
        }, {
            filename: "/data/Stage/Hell42.pxe",
            start: 1539854,
            end: 1539958
        }, {
            filename: "/data/Stage/Hell42.pxm",
            start: 1539958,
            end: 1540638
        }, {
            filename: "/data/Stage/Hell42.tsc",
            start: 1540638,
            end: 1542519
        }, {
            filename: "/data/Stage/Island.pxe",
            start: 1542519,
            end: 1542527
        }, {
            filename: "/data/Stage/Island.pxm",
            start: 1542527,
            end: 1542871
        }, {
            filename: "/data/Stage/Island.tsc",
            start: 1542871,
            end: 1542995
        }, {
            filename: "/data/Stage/Itoh.pxe",
            start: 1542995,
            end: 1543111
        }, {
            filename: "/data/Stage/Itoh.pxm",
            start: 1543111,
            end: 1543455
        }, {
            filename: "/data/Stage/Itoh.tsc",
            start: 1543455,
            end: 1545469
        }, {
            filename: "/data/Stage/Jail.pxa",
            start: 1545469,
            end: 1545725
        }, {
            filename: "/data/Stage/Jail1.pxe",
            start: 1545725,
            end: 1545877
        }, {
            filename: "/data/Stage/Jail1.pxm",
            start: 1545877,
            end: 1546485
        }, {
            filename: "/data/Stage/Jail1.tsc",
            start: 1546485,
            end: 1547927
        }, {
            filename: "/data/Stage/Jail2.pxe",
            start: 1547927,
            end: 1548127
        }, {
            filename: "/data/Stage/Jail2.pxm",
            start: 1548127,
            end: 1548647
        }, {
            filename: "/data/Stage/Jail2.tsc",
            start: 1548647,
            end: 1549753
        }, {
            filename: "/data/Stage/Jenka1.pxe",
            start: 1549753,
            end: 1550013
        }, {
            filename: "/data/Stage/Jenka1.pxm",
            start: 1550013,
            end: 1550357
        }, {
            filename: "/data/Stage/Jenka1.tsc",
            start: 1550357,
            end: 1555487
        }, {
            filename: "/data/Stage/Jenka2.pxe",
            start: 1555487,
            end: 1555663
        }, {
            filename: "/data/Stage/Jenka2.pxm",
            start: 1555663,
            end: 1556007
        }, {
            filename: "/data/Stage/Jenka2.tsc",
            start: 1556007,
            end: 1557733
        }, {
            filename: "/data/Stage/Kings.pxe",
            start: 1557733,
            end: 1557789
        }, {
            filename: "/data/Stage/Kings.pxm",
            start: 1557789,
            end: 1558133
        }, {
            filename: "/data/Stage/Kings.tsc",
            start: 1558133,
            end: 1558492
        }, {
            filename: "/data/Stage/Labo.pxa",
            start: 1558492,
            end: 1558748
        }, {
            filename: "/data/Stage/Little.pxe",
            start: 1558748,
            end: 1558864
        }, {
            filename: "/data/Stage/Little.pxm",
            start: 1558864,
            end: 1559208
        }, {
            filename: "/data/Stage/Little.tsc",
            start: 1559208,
            end: 1560459
        }, {
            filename: "/data/Stage/Lounge.pxe",
            start: 1560459,
            end: 1560659
        }, {
            filename: "/data/Stage/Lounge.pxm",
            start: 1560659,
            end: 1561147
        }, {
            filename: "/data/Stage/Lounge.tsc",
            start: 1561147,
            end: 1563200
        }, {
            filename: "/data/Stage/Malco.pxe",
            start: 1563200,
            end: 1563340
        }, {
            filename: "/data/Stage/Malco.pxm",
            start: 1563340,
            end: 1563684
        }, {
            filename: "/data/Stage/Malco.tsc",
            start: 1563684,
            end: 1567580
        }, {
            filename: "/data/Stage/Mapi.pxe",
            start: 1567580,
            end: 1567720
        }, {
            filename: "/data/Stage/Mapi.pxm",
            start: 1567720,
            end: 1568064
        }, {
            filename: "/data/Stage/Mapi.tsc",
            start: 1568064,
            end: 1569887
        }, {
            filename: "/data/Stage/Maze.pxa",
            start: 1569887,
            end: 1570143
        }, {
            filename: "/data/Stage/MazeA.pxe",
            start: 1570143,
            end: 1570355
        }, {
            filename: "/data/Stage/MazeA.pxm",
            start: 1570355,
            end: 1570875
        }, {
            filename: "/data/Stage/MazeA.tsc",
            start: 1570875,
            end: 1574006
        }, {
            filename: "/data/Stage/MazeB.pxe",
            start: 1574006,
            end: 1574206
        }, {
            filename: "/data/Stage/MazeB.pxm",
            start: 1574206,
            end: 1575012
        }, {
            filename: "/data/Stage/MazeB.tsc",
            start: 1575012,
            end: 1577280
        }, {
            filename: "/data/Stage/MazeD.pxe",
            start: 1577280,
            end: 1577360
        }, {
            filename: "/data/Stage/MazeD.pxm",
            start: 1577360,
            end: 1577704
        }, {
            filename: "/data/Stage/MazeD.tsc",
            start: 1577704,
            end: 1578296
        }, {
            filename: "/data/Stage/MazeH.pxe",
            start: 1578296,
            end: 1578412
        }, {
            filename: "/data/Stage/MazeH.pxm",
            start: 1578412,
            end: 1579060
        }, {
            filename: "/data/Stage/MazeH.tsc",
            start: 1579060,
            end: 1579380
        }, {
            filename: "/data/Stage/MazeI.pxe",
            start: 1579380,
            end: 1579844
        }, {
            filename: "/data/Stage/MazeI.pxm",
            start: 1579844,
            end: 1581602
        }, {
            filename: "/data/Stage/MazeI.tsc",
            start: 1581602,
            end: 1583109
        }, {
            filename: "/data/Stage/MazeM.pxe",
            start: 1583109,
            end: 1584257
        }, {
            filename: "/data/Stage/MazeM.pxm",
            start: 1584257,
            end: 1594985
        }, {
            filename: "/data/Stage/MazeM.tsc",
            start: 1594985,
            end: 1596106
        }, {
            filename: "/data/Stage/MazeO.pxe",
            start: 1596106,
            end: 1596294
        }, {
            filename: "/data/Stage/MazeO.pxm",
            start: 1596294,
            end: 1596638
        }, {
            filename: "/data/Stage/MazeO.tsc",
            start: 1596638,
            end: 1599736
        }, {
            filename: "/data/Stage/MazeS.pxe",
            start: 1599736,
            end: 1599960
        }, {
            filename: "/data/Stage/MazeS.pxm",
            start: 1599960,
            end: 1600409
        }, {
            filename: "/data/Stage/MazeS.tsc",
            start: 1600409,
            end: 1604763
        }, {
            filename: "/data/Stage/MazeW.pxe",
            start: 1604763,
            end: 1605779
        }, {
            filename: "/data/Stage/MazeW.pxm",
            start: 1605779,
            end: 1609787
        }, {
            filename: "/data/Stage/MazeW.tsc",
            start: 1609787,
            end: 1610908
        }, {
            filename: "/data/Stage/MiBox.pxe",
            start: 1610908,
            end: 1610976
        }, {
            filename: "/data/Stage/MiBox.pxm",
            start: 1610976,
            end: 1611320
        }, {
            filename: "/data/Stage/MiBox.tsc",
            start: 1611320,
            end: 1611495
        }, {
            filename: "/data/Stage/Mimi.pxa",
            start: 1611495,
            end: 1611751
        }, {
            filename: "/data/Stage/Mimi.pxe",
            start: 1611751,
            end: 1612227
        }, {
            filename: "/data/Stage/Mimi.pxm",
            start: 1612227,
            end: 1615835
        }, {
            filename: "/data/Stage/Mimi.tsc",
            start: 1615835,
            end: 1622941
        }, {
            filename: "/data/Stage/Momo.pxe",
            start: 1622941,
            end: 1623105
        }, {
            filename: "/data/Stage/Momo.pxm",
            start: 1623105,
            end: 1623449
        }, {
            filename: "/data/Stage/Momo.tsc",
            start: 1623449,
            end: 1628402
        }, {
            filename: "/data/Stage/New.pxe",
            start: 1628402,
            end: 1628818
        }, {
            filename: "/data/Stage/Oside.pxa",
            start: 1628818,
            end: 1629074
        }, {
            filename: "/data/Stage/Oside.pxe",
            start: 1629074,
            end: 1629682
        }, {
            filename: "/data/Stage/Oside.pxm",
            start: 1629682,
            end: 1647690
        }, {
            filename: "/data/Stage/Oside.tsc",
            start: 1647690,
            end: 1649575
        }, {
            filename: "/data/Stage/Ostep.pxe",
            start: 1649575,
            end: 1649691
        }, {
            filename: "/data/Stage/Ostep.pxm",
            start: 1649691,
            end: 1650659
        }, {
            filename: "/data/Stage/Ostep.tsc",
            start: 1650659,
            end: 1651268
        }, {
            filename: "/data/Stage/Pens.pxa",
            start: 1651268,
            end: 1651524
        }, {
            filename: "/data/Stage/Pens1.pxe",
            start: 1651524,
            end: 1651940
        }, {
            filename: "/data/Stage/Pens1.pxm",
            start: 1651940,
            end: 1652284
        }, {
            filename: "/data/Stage/Pens1.tsc",
            start: 1652284,
            end: 1661074
        }, {
            filename: "/data/Stage/Pens2.pxe",
            start: 1661074,
            end: 1661322
        }, {
            filename: "/data/Stage/Pens2.pxm",
            start: 1661322,
            end: 1661666
        }, {
            filename: "/data/Stage/Pens2.tsc",
            start: 1661666,
            end: 1663430
        }, {
            filename: "/data/Stage/Pixel.pxe",
            start: 1663430,
            end: 1663570
        }, {
            filename: "/data/Stage/Pixel.pxm",
            start: 1663570,
            end: 1663914
        }, {
            filename: "/data/Stage/Pixel.tsc",
            start: 1663914,
            end: 1666708
        }, {
            filename: "/data/Stage/Plant.pxe",
            start: 1666708,
            end: 1666992
        }, {
            filename: "/data/Stage/Plant.pxm",
            start: 1666992,
            end: 1667640
        }, {
            filename: "/data/Stage/Plant.tsc",
            start: 1667640,
            end: 1668963
        }, {
            filename: "/data/Stage/Pole.pxe",
            start: 1668963,
            end: 1669067
        }, {
            filename: "/data/Stage/Pole.pxm",
            start: 1669067,
            end: 1669411
        }, {
            filename: "/data/Stage/Pole.tsc",
            start: 1669411,
            end: 1671951
        }, {
            filename: "/data/Stage/Pool.pxe",
            start: 1671951,
            end: 1672151
        }, {
            filename: "/data/Stage/Pool.pxm",
            start: 1672151,
            end: 1672959
        }, {
            filename: "/data/Stage/Pool.tsc",
            start: 1672959,
            end: 1674282
        }, {
            filename: "/data/Stage/Prefa1.pxe",
            start: 1674282,
            end: 1674338
        }, {
            filename: "/data/Stage/Prefa1.pxm",
            start: 1674338,
            end: 1674682
        }, {
            filename: "/data/Stage/Prefa1.tsc",
            start: 1674682,
            end: 1675687
        }, {
            filename: "/data/Stage/Prefa2.pxe",
            start: 1675687,
            end: 1675767
        }, {
            filename: "/data/Stage/Prefa2.pxm",
            start: 1675767,
            end: 1676111
        }, {
            filename: "/data/Stage/Prefa2.tsc",
            start: 1676111,
            end: 1676714
        }, {
            filename: "/data/Stage/Priso1.pxe",
            start: 1676714,
            end: 1677826
        }, {
            filename: "/data/Stage/Priso1.pxm",
            start: 1677826,
            end: 1683834
        }, {
            filename: "/data/Stage/Priso1.tsc",
            start: 1683834,
            end: 1684251
        }, {
            filename: "/data/Stage/Priso2.pxe",
            start: 1684251,
            end: 1685483
        }, {
            filename: "/data/Stage/Priso2.pxm",
            start: 1685483,
            end: 1691491
        }, {
            filename: "/data/Stage/Priso2.tsc",
            start: 1691491,
            end: 1692436
        }, {
            filename: "/data/Stage/Prt0.pbm",
            start: 1692436,
            end: 1692634
        }, {
            filename: "/data/Stage/PrtAlmond.pbm",
            start: 1692634,
            end: 1705048
        }, {
            filename: "/data/Stage/PrtBarr.pbm",
            start: 1705048,
            end: 1716438
        }, {
            filename: "/data/Stage/PrtCave.pbm",
            start: 1716438,
            end: 1726804
        }, {
            filename: "/data/Stage/PrtCent.pbm",
            start: 1726804,
            end: 1743314
        }, {
            filename: "/data/Stage/PrtEggIn.pbm",
            start: 1743314,
            end: 1753680
        }, {
            filename: "/data/Stage/PrtEggX.pbm",
            start: 1753680,
            end: 1784526
        }, {
            filename: "/data/Stage/PrtEggs.pbm",
            start: 1784526,
            end: 1815372
        }, {
            filename: "/data/Stage/PrtFall.pbm",
            start: 1815372,
            end: 1831882
        }, {
            filename: "/data/Stage/PrtGard.pbm",
            start: 1831882,
            end: 1844424
        }, {
            filename: "/data/Stage/PrtHell.pbm",
            start: 1844424,
            end: 1875270
        }, {
            filename: "/data/Stage/PrtJail.pbm",
            start: 1875270,
            end: 1891780
        }, {
            filename: "/data/Stage/PrtLabo.pbm",
            start: 1891780,
            end: 1896002
        }, {
            filename: "/data/Stage/PrtMaze.pbm",
            start: 1896002,
            end: 1916608
        }, {
            filename: "/data/Stage/PrtMimi.pbm",
            start: 1916608,
            end: 1937214
        }, {
            filename: "/data/Stage/PrtOside.pbm",
            start: 1937214,
            end: 1945532
        }, {
            filename: "/data/Stage/PrtPens.pbm",
            start: 1945532,
            end: 1953850
        }, {
            filename: "/data/Stage/PrtRiver.pbm",
            start: 1953850,
            end: 1966264
        }, {
            filename: "/data/Stage/PrtSand.pbm",
            start: 1966264,
            end: 1980726
        }, {
            filename: "/data/Stage/PrtStore.pbm",
            start: 1980726,
            end: 1995188
        }, {
            filename: "/data/Stage/PrtWeed.pbm",
            start: 1995188,
            end: 2011698
        }, {
            filename: "/data/Stage/PrtWhite.pbm",
            start: 2011698,
            end: 2042544
        }, {
            filename: "/data/Stage/Ring1.pxe",
            start: 2042544,
            end: 2042660
        }, {
            filename: "/data/Stage/Ring1.pxm",
            start: 2042660,
            end: 2043308
        }, {
            filename: "/data/Stage/Ring1.tsc",
            start: 2043308,
            end: 2045813
        }, {
            filename: "/data/Stage/Ring2.pxe",
            start: 2045813,
            end: 2046193
        }, {
            filename: "/data/Stage/Ring2.pxm",
            start: 2046193,
            end: 2046841
        }, {
            filename: "/data/Stage/Ring2.tsc",
            start: 2046841,
            end: 2050954
        }, {
            filename: "/data/Stage/Ring3.pxe",
            start: 2050954,
            end: 2051154
        }, {
            filename: "/data/Stage/Ring3.pxm",
            start: 2051154,
            end: 2051802
        }, {
            filename: "/data/Stage/Ring3.tsc",
            start: 2051802,
            end: 2055727
        }, {
            filename: "/data/Stage/River.pxa",
            start: 2055727,
            end: 2055983
        }, {
            filename: "/data/Stage/River.pxe",
            start: 2055983,
            end: 2057191
        }, {
            filename: "/data/Stage/River.pxm",
            start: 2057191,
            end: 2064399
        }, {
            filename: "/data/Stage/River.tsc",
            start: 2064399,
            end: 2065118
        }, {
            filename: "/data/Stage/Sand.pxa",
            start: 2065118,
            end: 2065374
        }, {
            filename: "/data/Stage/Sand.pxe",
            start: 2065374,
            end: 2067326
        }, {
            filename: "/data/Stage/Sand.pxm",
            start: 2067326,
            end: 2079334
        }, {
            filename: "/data/Stage/Sand.tsc",
            start: 2079334,
            end: 2083363
        }, {
            filename: "/data/Stage/SandE.pxe",
            start: 2083363,
            end: 2083431
        }, {
            filename: "/data/Stage/SandE.pxm",
            start: 2083431,
            end: 2084783
        }, {
            filename: "/data/Stage/SandE.tsc",
            start: 2084783,
            end: 2085970
        }, {
            filename: "/data/Stage/Santa.pxe",
            start: 2085970,
            end: 2086110
        }, {
            filename: "/data/Stage/Santa.pxm",
            start: 2086110,
            end: 2086454
        }, {
            filename: "/data/Stage/Santa.tsc",
            start: 2086454,
            end: 2088088
        }, {
            filename: "/data/Stage/Shelt.pxa",
            start: 2088088,
            end: 2088344
        }, {
            filename: "/data/Stage/Shelt.pxe",
            start: 2088344,
            end: 2088604
        }, {
            filename: "/data/Stage/Shelt.pxm",
            start: 2088604,
            end: 2088948
        }, {
            filename: "/data/Stage/Shelt.tsc",
            start: 2088948,
            end: 2094099
        }, {
            filename: "/data/Stage/Start.pxe",
            start: 2094099,
            end: 2094191
        }, {
            filename: "/data/Stage/Start.pxm",
            start: 2094191,
            end: 2094535
        }, {
            filename: "/data/Stage/Start.tsc",
            start: 2094535,
            end: 2094915
        }, {
            filename: "/data/Stage/Statue.pxe",
            start: 2094915,
            end: 2095079
        }, {
            filename: "/data/Stage/Statue.pxm",
            start: 2095079,
            end: 2095423
        }, {
            filename: "/data/Stage/Statue.tsc",
            start: 2095423,
            end: 2096412
        }, {
            filename: "/data/Stage/Store.pxa",
            start: 2096412,
            end: 2096668
        }, {
            filename: "/data/Stage/Stream.pxe",
            start: 2096668,
            end: 2097048
        }, {
            filename: "/data/Stage/Stream.pxm",
            start: 2097048,
            end: 2098976
        }, {
            filename: "/data/Stage/Stream.tsc",
            start: 2098976,
            end: 2099666
        }, {
            filename: "/data/Stage/Weed.pxa",
            start: 2099666,
            end: 2099922
        }, {
            filename: "/data/Stage/Weed.pxe",
            start: 2099922,
            end: 2101958
        }, {
            filename: "/data/Stage/Weed.pxm",
            start: 2101958,
            end: 2108406
        }, {
            filename: "/data/Stage/Weed.tsc",
            start: 2108406,
            end: 2114956
        }, {
            filename: "/data/Stage/WeedB.pxe",
            start: 2114956,
            end: 2115072
        }, {
            filename: "/data/Stage/WeedB.pxm",
            start: 2115072,
            end: 2115416
        }, {
            filename: "/data/Stage/WeedB.tsc",
            start: 2115416,
            end: 2116055
        }, {
            filename: "/data/Stage/WeedD.pxe",
            start: 2116055,
            end: 2116123
        }, {
            filename: "/data/Stage/WeedD.pxm",
            start: 2116123,
            end: 2116467
        }, {
            filename: "/data/Stage/WeedD.tsc",
            start: 2116467,
            end: 2116834
        }, {
            filename: "/data/Stage/WeedS.pxe",
            start: 2116834,
            end: 2116878
        }, {
            filename: "/data/Stage/WeedS.pxm",
            start: 2116878,
            end: 2117222
        }, {
            filename: "/data/Stage/WeedS.tsc",
            start: 2117222,
            end: 2117453
        }, {
            filename: "/data/Stage/White.pxa",
            start: 2117453,
            end: 2117709
        }, {
            filename: "/data/Stage/e_Blcn.pxe",
            start: 2117709,
            end: 2117729
        }, {
            filename: "/data/Stage/e_Blcn.pxm",
            start: 2117729,
            end: 2118073
        }, {
            filename: "/data/Stage/e_Blcn.tsc",
            start: 2118073,
            end: 2118345
        }, {
            filename: "/data/Stage/e_Ceme.pxe",
            start: 2118345,
            end: 2118509
        }, {
            filename: "/data/Stage/e_Ceme.pxm",
            start: 2118509,
            end: 2118853
        }, {
            filename: "/data/Stage/e_Ceme.tsc",
            start: 2118853,
            end: 2119086
        }, {
            filename: "/data/Stage/e_Jenk.pxe",
            start: 2119086,
            end: 2119202
        }, {
            filename: "/data/Stage/e_Jenk.pxm",
            start: 2119202,
            end: 2119546
        }, {
            filename: "/data/Stage/e_Jenk.tsc",
            start: 2119546,
            end: 2119934
        }, {
            filename: "/data/Stage/e_Labo.pxe",
            start: 2119934,
            end: 2120050
        }, {
            filename: "/data/Stage/e_Labo.pxm",
            start: 2120050,
            end: 2120394
        }, {
            filename: "/data/Stage/e_Labo.tsc",
            start: 2120394,
            end: 2120629
        }, {
            filename: "/data/Stage/e_Malc.pxe",
            start: 2120629,
            end: 2120721
        }, {
            filename: "/data/Stage/e_Malc.pxm",
            start: 2120721,
            end: 2121065
        }, {
            filename: "/data/Stage/e_Malc.tsc",
            start: 2121065,
            end: 2121442
        }, {
            filename: "/data/Stage/e_Maze.pxe",
            start: 2121442,
            end: 2121594
        }, {
            filename: "/data/Stage/e_Maze.pxm",
            start: 2121594,
            end: 2121938
        }, {
            filename: "/data/Stage/e_Maze.tsc",
            start: 2121938,
            end: 2122347
        }, {
            filename: "/data/Stage/e_Sky.pxe",
            start: 2122347,
            end: 2122391
        }, {
            filename: "/data/Stage/e_Sky.pxm",
            start: 2122391,
            end: 2122879
        }, {
            filename: "/data/Stage/e_Sky.tsc",
            start: 2122879,
            end: 2123331
        }, {
            filename: "/data/StageImage.pbm",
            start: 2123331,
            end: 2125505
        }, {
            filename: "/data/StageMeta/Ballo2.json",
            start: 2125505,
            end: 2125536
        }, {
            filename: "/data/StageMeta/CentW.json",
            start: 2125536,
            end: 2125566
        }, {
            filename: "/data/StageMeta/Chako.json",
            start: 2125566,
            end: 2125595
        }, {
            filename: "/data/StageMeta/Clock.json",
            start: 2125595,
            end: 2125635
        }, {
            filename: "/data/StageMeta/Comu.json",
            start: 2125635,
            end: 2125665
        }, {
            filename: "/data/StageMeta/Cthu.json",
            start: 2125665,
            end: 2125695
        }, {
            filename: "/data/StageMeta/Cthu2.json",
            start: 2125695,
            end: 2125725
        }, {
            filename: "/data/StageMeta/Curly.json",
            start: 2125725,
            end: 2125765
        }, {
            filename: "/data/StageMeta/CurlyS.json",
            start: 2125765,
            end: 2125795
        }, {
            filename: "/data/StageMeta/Dark.json",
            start: 2125795,
            end: 2125825
        }, {
            filename: "/data/StageMeta/Drain.json",
            start: 2125825,
            end: 2125867
        }, {
            filename: "/data/StageMeta/EgEnd1.json",
            start: 2125867,
            end: 2125897
        }, {
            filename: "/data/StageMeta/EgEnd2.json",
            start: 2125897,
            end: 2125927
        }, {
            filename: "/data/StageMeta/EggR.json",
            start: 2125927,
            end: 2125957
        }, {
            filename: "/data/StageMeta/EggR2.json",
            start: 2125957,
            end: 2125987
        }, {
            filename: "/data/StageMeta/EggX.json",
            start: 2125987,
            end: 2126017
        }, {
            filename: "/data/StageMeta/EggX2.json",
            start: 2126017,
            end: 2126047
        }, {
            filename: "/data/StageMeta/Frog.json",
            start: 2126047,
            end: 2126089
        }, {
            filename: "/data/StageMeta/Gard.json",
            start: 2126089,
            end: 2126129
        }, {
            filename: "/data/StageMeta/Hell1.json",
            start: 2126129,
            end: 2126171
        }, {
            filename: "/data/StageMeta/Hell4.json",
            start: 2126171,
            end: 2126200
        }, {
            filename: "/data/StageMeta/Hell42.json",
            start: 2126200,
            end: 2126229
        }, {
            filename: "/data/StageMeta/Itoh.json",
            start: 2126229,
            end: 2126259
        }, {
            filename: "/data/StageMeta/Jail1.json",
            start: 2126259,
            end: 2126299
        }, {
            filename: "/data/StageMeta/Jail2.json",
            start: 2126299,
            end: 2126329
        }, {
            filename: "/data/StageMeta/Jenka1.json",
            start: 2126329,
            end: 2126358
        }, {
            filename: "/data/StageMeta/Jenka2.json",
            start: 2126358,
            end: 2126387
        }, {
            filename: "/data/StageMeta/Little.json",
            start: 2126387,
            end: 2126417
        }, {
            filename: "/data/StageMeta/Lounge.json",
            start: 2126417,
            end: 2126457
        }, {
            filename: "/data/StageMeta/Malco.json",
            start: 2126457,
            end: 2126486
        }, {
            filename: "/data/StageMeta/Mapi.json",
            start: 2126486,
            end: 2126528
        }, {
            filename: "/data/StageMeta/MazeA.json",
            start: 2126528,
            end: 2126558
        }, {
            filename: "/data/StageMeta/MazeB.json",
            start: 2126558,
            end: 2126598
        }, {
            filename: "/data/StageMeta/MazeD.json",
            start: 2126598,
            end: 2126638
        }, {
            filename: "/data/StageMeta/MazeH.json",
            start: 2126638,
            end: 2126668
        }, {
            filename: "/data/StageMeta/MazeI.json",
            start: 2126668,
            end: 2126698
        }, {
            filename: "/data/StageMeta/MazeO.json",
            start: 2126698,
            end: 2126728
        }, {
            filename: "/data/StageMeta/MazeS.json",
            start: 2126728,
            end: 2126768
        }, {
            filename: "/data/StageMeta/Momo.json",
            start: 2126768,
            end: 2126808
        }, {
            filename: "/data/StageMeta/Pens1.json",
            start: 2126808,
            end: 2126838
        }, {
            filename: "/data/StageMeta/Pens2.json",
            start: 2126838,
            end: 2126868
        }, {
            filename: "/data/StageMeta/Pixel.json",
            start: 2126868,
            end: 2126898
        }, {
            filename: "/data/StageMeta/Plant.json",
            start: 2126898,
            end: 2126940
        }, {
            filename: "/data/StageMeta/Pole.json",
            start: 2126940,
            end: 2126982
        }, {
            filename: "/data/StageMeta/Prefa1.json",
            start: 2126982,
            end: 2127012
        }, {
            filename: "/data/StageMeta/Prefa2.json",
            start: 2127012,
            end: 2127042
        }, {
            filename: "/data/StageMeta/Shelt.json",
            start: 2127042,
            end: 2127072
        }, {
            filename: "/data/StageMeta/Start.json",
            start: 2127072,
            end: 2127114
        }, {
            filename: "/data/StageMeta/Statue.json",
            start: 2127114,
            end: 2127156
        }, {
            filename: "/data/StageMeta/WeedB.json",
            start: 2127156,
            end: 2127186
        }, {
            filename: "/data/StageMeta/WeedD.json",
            start: 2127186,
            end: 2127216
        }, {
            filename: "/data/StageMeta/WeedS.json",
            start: 2127216,
            end: 2127245
        }, {
            filename: "/data/StageMeta/e_Malc.json",
            start: 2127245,
            end: 2127274
        }, {
            filename: "/data/StageMeta/e_Maze.json",
            start: 2127274,
            end: 2127304
        }, {
            filename: "/data/StageSelect.tsc",
            start: 2127304,
            end: 2127579
        }, {
            filename: "/data/TextBox.pbm",
            start: 2127579,
            end: 2145561
        }, {
            filename: "/data/Title.pbm",
            start: 2145561,
            end: 2153367
        }, {
            filename: "/data/bk0.pbm",
            start: 2153367,
            end: 2153949
        }, {
            filename: "/data/bkBlack.pbm",
            start: 2153949,
            end: 2154531
        }, {
            filename: "/data/bkBlue.pbm",
            start: 2154531,
            end: 2156705
        }, {
            filename: "/data/bkFall.pbm",
            start: 2156705,
            end: 2157287
        }, {
            filename: "/data/bkFog.pbm",
            start: 2157287,
            end: 2195813
        }, {
            filename: "/data/bkFog480fix.pbm",
            start: 2195813,
            end: 2587615
        }, {
            filename: "/data/bkGard.pbm",
            start: 2587615,
            end: 2589277
        }, {
            filename: "/data/bkGray.pbm",
            start: 2589277,
            end: 2591451
        }, {
            filename: "/data/bkGreen.pbm",
            start: 2591451,
            end: 2593625
        }, {
            filename: "/data/bkHellish.pbm",
            start: 2593625,
            end: 2900963
        }, {
            filename: "/data/bkHellish480fix.pbm",
            start: 2900963,
            end: 3423341
        }, {
            filename: "/data/bkLight.pbm",
            start: 3423341,
            end: 3730679
        }, {
            filename: "/data/bkLight480fix.pbm",
            start: 3730679,
            end: 4122481
        }, {
            filename: "/data/bkMaze.pbm",
            start: 4122481,
            end: 4124655
        }, {
            filename: "/data/bkMoon.pbm",
            start: 4124655,
            end: 4163181
        }, {
            filename: "/data/bkMoon480fix.pbm",
            start: 4163181,
            end: 4554983
        }, {
            filename: "/data/bkRed.pbm",
            start: 4554983,
            end: 4555621
        }, {
            filename: "/data/bkSunset.pbm",
            start: 4555621,
            end: 4862959
        }, {
            filename: "/data/bkSunset480fix.pbm",
            start: 4862959,
            end: 5385337
        }, {
            filename: "/data/bkWater.pbm",
            start: 5385337,
            end: 5386231
        }, {
            filename: "/data/casts.pbm",
            start: 5386231,
            end: 5464117
        }, {
            filename: "/data/endpic/credit01.bmp",
            start: 5464117,
            end: 5483435
        }, {
            filename: "/data/endpic/credit01m.bmp",
            start: 5483435,
            end: 5502821
        }, {
            filename: "/data/endpic/credit02.bmp",
            start: 5502821,
            end: 5522139
        }, {
            filename: "/data/endpic/credit02m.bmp",
            start: 5522139,
            end: 5541525
        }, {
            filename: "/data/endpic/credit03.bmp",
            start: 5541525,
            end: 5560843
        }, {
            filename: "/data/endpic/credit03m.bmp",
            start: 5560843,
            end: 5580229
        }, {
            filename: "/data/endpic/credit04.bmp",
            start: 5580229,
            end: 5599547
        }, {
            filename: "/data/endpic/credit05.bmp",
            start: 5599547,
            end: 5618865
        }, {
            filename: "/data/endpic/credit06.bmp",
            start: 5618865,
            end: 5638183
        }, {
            filename: "/data/endpic/credit07.bmp",
            start: 5638183,
            end: 5657501
        }, {
            filename: "/data/endpic/credit08.bmp",
            start: 5657501,
            end: 5676819
        }, {
            filename: "/data/endpic/credit09.bmp",
            start: 5676819,
            end: 5696137
        }, {
            filename: "/data/endpic/credit10.bmp",
            start: 5696137,
            end: 5715455
        }, {
            filename: "/data/endpic/credit11.bmp",
            start: 5715455,
            end: 5734773
        }, {
            filename: "/data/endpic/credit12.bmp",
            start: 5734773,
            end: 5754091
        }, {
            filename: "/data/endpic/credit14.bmp",
            start: 5754091,
            end: 5773409
        }, {
            filename: "/data/endpic/credit15.bmp",
            start: 5773409,
            end: 5792727
        }, {
            filename: "/data/endpic/credit16.bmp",
            start: 5792727,
            end: 5812045
        }, {
            filename: "/data/endpic/credit17.bmp",
            start: 5812045,
            end: 5831363
        }, {
            filename: "/data/endpic/credit18.bmp",
            start: 5831363,
            end: 5850681
        }, {
            filename: "/data/endpic/pixel.bmp",
            start: 5850681,
            end: 5852079
        }, {
            filename: "/data/font_1.fnt",
            start: 5852079,
            end: 5877465
        }, {
            filename: "/data/font_1_0.png",
            start: 5877465,
            end: 5878528
        }, {
            filename: "/data/font_2.fnt",
            start: 5878528,
            end: 5904220
        }, {
            filename: "/data/font_2_0.png",
            start: 5904220,
            end: 5905607
        }, {
            filename: "/data/font_3.fnt",
            start: 5905607,
            end: 5931335
        }, {
            filename: "/data/font_3_0.png",
            start: 5931335,
            end: 5932386
        }, {
            filename: "/data/font_3_1.png",
            start: 5932386,
            end: 5933216
        }, {
            filename: "/data/font_4.fnt",
            start: 5933216,
            end: 5959072
        }, {
            filename: "/data/font_4_0.png",
            start: 5959072,
            end: 5961151
        }, {
            filename: "/data/font_5.fnt",
            start: 5961151,
            end: 5987030
        }, {
            filename: "/data/font_5_0.png",
            start: 5987030,
            end: 5990661
        }, {
            filename: "/data/music.json",
            start: 5990661,
            end: 5991824
        }, {
            filename: "/data/music_dirs.json",
            start: 5991824,
            end: 5992032
        }, {
            filename: "/data/npc.tbl",
            start: 5992032,
            end: 6000696
        }, {
            filename: "/data/org/access.org",
            start: 6000696,
            end: 6001834
        }, {
            filename: "/data/org/anzen.org",
            start: 6001834,
            end: 6011028
        }, {
            filename: "/data/org/balcony.org",
            start: 6011028,
            end: 6014110
        }, {
            filename: "/data/org/ballos.org",
            start: 6014110,
            end: 6017680
        }, {
            filename: "/data/org/bdown.org",
            start: 6017680,
            end: 6020250
        }, {
            filename: "/data/org/cemetery.org",
            start: 6020250,
            end: 6024828
        }, {
            filename: "/data/org/curly.org",
            start: 6024828,
            end: 6050566
        }, {
            filename: "/data/org/dr.org",
            start: 6050566,
            end: 6052728
        }, {
            filename: "/data/org/ending.org",
            start: 6052728,
            end: 6070626
        }, {
            filename: "/data/org/escape.org",
            start: 6070626,
            end: 6078244
        }, {
            filename: "/data/org/fanfale1.org",
            start: 6078244,
            end: 6079158
        }, {
            filename: "/data/org/fanfale2.org",
            start: 6079158,
            end: 6080232
        }, {
            filename: "/data/org/fanfale3.org",
            start: 6080232,
            end: 6081154
        }, {
            filename: "/data/org/fireeye.org",
            start: 6081154,
            end: 6102508
        }, {
            filename: "/data/org/gameover.org",
            start: 6102508,
            end: 6103646
        }, {
            filename: "/data/org/ginsuke.org",
            start: 6103646,
            end: 6109616
        }, {
            filename: "/data/org/grand.org",
            start: 6109616,
            end: 6123082
        }, {
            filename: "/data/org/gravity.org",
            start: 6123082,
            end: 6143660
        }, {
            filename: "/data/org/hell.org",
            start: 6143660,
            end: 6162046
        }, {
            filename: "/data/org/ironh.org",
            start: 6162046,
            end: 6175496
        }, {
            filename: "/data/org/jenka.org",
            start: 6175496,
            end: 6183802
        }, {
            filename: "/data/org/jenka2.org",
            start: 6183802,
            end: 6195788
        }, {
            filename: "/data/org/kodou.org",
            start: 6195788,
            end: 6206206
        }, {
            filename: "/data/org/lastbt3.org",
            start: 6206206,
            end: 6227328
        }, {
            filename: "/data/org/lastbtl.org",
            start: 6227328,
            end: 6230098
        }, {
            filename: "/data/org/lastcave.org",
            start: 6230098,
            end: 6248220
        }, {
            filename: "/data/org/marine.org",
            start: 6248220,
            end: 6265182
        }, {
            filename: "/data/org/maze.org",
            start: 6265182,
            end: 6279968
        }, {
            filename: "/data/org/mdown2.org",
            start: 6279968,
            end: 6301042
        }, {
            filename: "/data/org/mura.org",
            start: 6301042,
            end: 6311676
        }, {
            filename: "/data/org/oside.org",
            start: 6311676,
            end: 6337310
        }, {
            filename: "/data/org/plant.org",
            start: 6337310,
            end: 6348688
        }, {
            filename: "/data/org/quiet.org",
            start: 6348688,
            end: 6353458
        }, {
            filename: "/data/org/requiem.org",
            start: 6353458,
            end: 6363180
        }, {
            filename: "/data/org/toroko.org",
            start: 6363180,
            end: 6381662
        }, {
            filename: "/data/org/vivi.org",
            start: 6381662,
            end: 6392120
        }, {
            filename: "/data/org/wanpak2.org",
            start: 6392120,
            end: 6408114
        }, {
            filename: "/data/org/wanpaku.org",
            start: 6408114,
            end: 6427740
        }, {
            filename: "/data/org/weed.org",
            start: 6427740,
            end: 6451446
        }, {
            filename: "/data/org/white.org",
            start: 6451446,
            end: 6475160
        }, {
            filename: "/data/org/zonbie.org",
            start: 6475160,
            end: 6480506
        }, {
            filename: "/data/pxt/fx01.pxt",
            start: 6480506,
            end: 6482024
        }, {
            filename: "/data/pxt/fx02.pxt",
            start: 6482024,
            end: 6483542
        }, {
            filename: "/data/pxt/fx03.pxt",
            start: 6483542,
            end: 6485054
        }, {
            filename: "/data/pxt/fx04.pxt",
            start: 6485054,
            end: 6486572
        }, {
            filename: "/data/pxt/fx05.pxt",
            start: 6486572,
            end: 6488092
        }, {
            filename: "/data/pxt/fx06.pxt",
            start: 6488092,
            end: 6489612
        }, {
            filename: "/data/pxt/fx07.pxt",
            start: 6489612,
            end: 6491118
        }, {
            filename: "/data/pxt/fx0b.pxt",
            start: 6491118,
            end: 6492636
        }, {
            filename: "/data/pxt/fx0c.pxt",
            start: 6492636,
            end: 6494184
        }, {
            filename: "/data/pxt/fx0e.pxt",
            start: 6494184,
            end: 6495706
        }, {
            filename: "/data/pxt/fx0f.pxt",
            start: 6495706,
            end: 6497220
        }, {
            filename: "/data/pxt/fx10.pxt",
            start: 6497220,
            end: 6498776
        }, {
            filename: "/data/pxt/fx11.pxt",
            start: 6498776,
            end: 6500372
        }, {
            filename: "/data/pxt/fx12.pxt",
            start: 6500372,
            end: 6501894
        }, {
            filename: "/data/pxt/fx14.pxt",
            start: 6501894,
            end: 6503450
        }, {
            filename: "/data/pxt/fx15.pxt",
            start: 6503450,
            end: 6504968
        }, {
            filename: "/data/pxt/fx16.pxt",
            start: 6504968,
            end: 6506488
        }, {
            filename: "/data/pxt/fx17.pxt",
            start: 6506488,
            end: 6508006
        }, {
            filename: "/data/pxt/fx18.pxt",
            start: 6508006,
            end: 6509520
        }, {
            filename: "/data/pxt/fx19.pxt",
            start: 6509520,
            end: 6511076
        }, {
            filename: "/data/pxt/fx1a.pxt",
            start: 6511076,
            end: 6512614
        }, {
            filename: "/data/pxt/fx1b.pxt",
            start: 6512614,
            end: 6514142
        }, {
            filename: "/data/pxt/fx1c.pxt",
            start: 6514142,
            end: 6515680
        }, {
            filename: "/data/pxt/fx1d.pxt",
            start: 6515680,
            end: 6517204
        }, {
            filename: "/data/pxt/fx1e.pxt",
            start: 6517204,
            end: 6518726
        }, {
            filename: "/data/pxt/fx1f.pxt",
            start: 6518726,
            end: 6520242
        }, {
            filename: "/data/pxt/fx20.pxt",
            start: 6520242,
            end: 6521786
        }, {
            filename: "/data/pxt/fx21.pxt",
            start: 6521786,
            end: 6523336
        }, {
            filename: "/data/pxt/fx22.pxt",
            start: 6523336,
            end: 6524884
        }, {
            filename: "/data/pxt/fx23.pxt",
            start: 6524884,
            end: 6526478
        }, {
            filename: "/data/pxt/fx25.pxt",
            start: 6526478,
            end: 6528032
        }, {
            filename: "/data/pxt/fx26.pxt",
            start: 6528032,
            end: 6529578
        }, {
            filename: "/data/pxt/fx27.pxt",
            start: 6529578,
            end: 6531150
        }, {
            filename: "/data/pxt/fx28.pxt",
            start: 6531150,
            end: 6532706
        }, {
            filename: "/data/pxt/fx29.pxt",
            start: 6532706,
            end: 6534262
        }, {
            filename: "/data/pxt/fx2a.pxt",
            start: 6534262,
            end: 6535786
        }, {
            filename: "/data/pxt/fx2b.pxt",
            start: 6535786,
            end: 6537308
        }, {
            filename: "/data/pxt/fx2c.pxt",
            start: 6537308,
            end: 6538898
        }, {
            filename: "/data/pxt/fx2d.pxt",
            start: 6538898,
            end: 6540414
        }, {
            filename: "/data/pxt/fx2e.pxt",
            start: 6540414,
            end: 6541928
        }, {
            filename: "/data/pxt/fx2f.pxt",
            start: 6541928,
            end: 6543440
        }, {
            filename: "/data/pxt/fx30.pxt",
            start: 6543440,
            end: 6544962
        }, {
            filename: "/data/pxt/fx31.pxt",
            start: 6544962,
            end: 6546516
        }, {
            filename: "/data/pxt/fx32.pxt",
            start: 6546516,
            end: 6548068
        }, {
            filename: "/data/pxt/fx33.pxt",
            start: 6548068,
            end: 6549626
        }, {
            filename: "/data/pxt/fx34.pxt",
            start: 6549626,
            end: 6551184
        }, {
            filename: "/data/pxt/fx35.pxt",
            start: 6551184,
            end: 6552742
        }, {
            filename: "/data/pxt/fx36.pxt",
            start: 6552742,
            end: 6554294
        }, {
            filename: "/data/pxt/fx37.pxt",
            start: 6554294,
            end: 6555846
        }, {
            filename: "/data/pxt/fx38.pxt",
            start: 6555846,
            end: 6557392
        }, {
            filename: "/data/pxt/fx39.pxt",
            start: 6557392,
            end: 6558950
        }, {
            filename: "/data/pxt/fx3a.pxt",
            start: 6558950,
            end: 6560500
        }, {
            filename: "/data/pxt/fx3b.pxt",
            start: 6560500,
            end: 6562014
        }, {
            filename: "/data/pxt/fx3c.pxt",
            start: 6562014,
            end: 6563528
        }, {
            filename: "/data/pxt/fx3d.pxt",
            start: 6563528,
            end: 6565042
        }, {
            filename: "/data/pxt/fx3e.pxt",
            start: 6565042,
            end: 6566582
        }, {
            filename: "/data/pxt/fx3f.pxt",
            start: 6566582,
            end: 6568122
        }, {
            filename: "/data/pxt/fx40.pxt",
            start: 6568122,
            end: 6569662
        }, {
            filename: "/data/pxt/fx41.pxt",
            start: 6569662,
            end: 6571182
        }, {
            filename: "/data/pxt/fx46.pxt",
            start: 6571182,
            end: 6572734
        }, {
            filename: "/data/pxt/fx47.pxt",
            start: 6572734,
            end: 6574290
        }, {
            filename: "/data/pxt/fx48.pxt",
            start: 6574290,
            end: 6575844
        }, {
            filename: "/data/pxt/fx64.pxt",
            start: 6575844,
            end: 6577358
        }, {
            filename: "/data/pxt/fx65.pxt",
            start: 6577358,
            end: 6578930
        }, {
            filename: "/data/pxt/fx66.pxt",
            start: 6578930,
            end: 6580484
        }, {
            filename: "/data/pxt/fx67.pxt",
            start: 6580484,
            end: 6582048
        }, {
            filename: "/data/pxt/fx68.pxt",
            start: 6582048,
            end: 6583562
        }, {
            filename: "/data/pxt/fx69.pxt",
            start: 6583562,
            end: 6585078
        }, {
            filename: "/data/pxt/fx6a.pxt",
            start: 6585078,
            end: 6586620
        }, {
            filename: "/data/pxt/fx6b.pxt",
            start: 6586620,
            end: 6588138
        }, {
            filename: "/data/pxt/fx6c.pxt",
            start: 6588138,
            end: 6589662
        }, {
            filename: "/data/pxt/fx6d.pxt",
            start: 6589662,
            end: 6591176
        }, {
            filename: "/data/pxt/fx6e.pxt",
            start: 6591176,
            end: 6592688
        }, {
            filename: "/data/pxt/fx6f.pxt",
            start: 6592688,
            end: 6594204
        }, {
            filename: "/data/pxt/fx70.pxt",
            start: 6594204,
            end: 6595722
        }, {
            filename: "/data/pxt/fx71.pxt",
            start: 6595722,
            end: 6597236
        }, {
            filename: "/data/pxt/fx72.pxt",
            start: 6597236,
            end: 6598792
        }, {
            filename: "/data/pxt/fx73.pxt",
            start: 6598792,
            end: 6600370
        }, {
            filename: "/data/pxt/fx74.pxt",
            start: 6600370,
            end: 6601964
        }, {
            filename: "/data/pxt/fx75.pxt",
            start: 6601964,
            end: 6603516
        }, {
            filename: "/data/pxt/fx96.pxt",
            start: 6603516,
            end: 6605060
        }, {
            filename: "/data/pxt/fx97.pxt",
            start: 6605060,
            end: 6606608
        }, {
            filename: "/data/pxt/fx98.pxt",
            start: 6606608,
            end: 6608126
        }, {
            filename: "/data/pxt/fx99.pxt",
            start: 6608126,
            end: 6609646
        }, {
            filename: "/data/pxt/fx9a.pxt",
            start: 6609646,
            end: 6611196
        }, {
            filename: "/data/pxt/fx9b.pxt",
            start: 6611196,
            end: 6612740
        }, {
            filename: "/data/spot.png",
            start: 6612740,
            end: 6689317
        }, {
            filename: "/data/sprites.sif",
            start: 6689317,
            end: 6748799
        }, {
            filename: "/data/stage.dat",
            start: 6748799,
            end: 6755735
        }, {
            filename: "/data/system.json",
            start: 6755735,
            end: 6755763
        }, {
            filename: "/data/tilekey.dat",
            start: 6755763,
            end: 6756791
        }, {
            filename: "/data/wavetable.dat",
            start: 6756791,
            end: 6782391
        }],
        remote_package_size: 6782391
    })
}
)();
var aa = Object.assign({}, h), ba = [], da = "./this.program", ea = (a,b)=>{
    throw b;
}
, fa = "", ha;
"undefined" != typeof document && document.currentScript && (fa = document.currentScript.src);
fa = fa.startsWith("blob:") ? "" : fa.substr(0, fa.replace(/[?#].*/, "").lastIndexOf("/") + 1);
ha = a=>fetch(a, {
    credentials: "same-origin"
}).then(b=>b.ok ? b.arrayBuffer() : Promise.reject(Error(b.status + " : " + b.url)));
var ia = h.print || console.log.bind(console)
  , k = h.printErr || console.error.bind(console);
Object.assign(h, aa);
aa = null;
h.arguments && (ba = h.arguments);
h.thisProgram && (da = h.thisProgram);
h.quit && (ea = h.quit);
var ja;
h.wasmBinary && (ja = h.wasmBinary);
var ka, la = !1, ma, m, q, na, oa, u, v, x, y, pa = [], qa = [], ra = [], sa = [];
function ta() {
    var a = h.preRun.shift();
    pa.unshift(a)
}
var ua = 0
  , va = null
  , wa = null;
function xa() {
    ua++;
    h.monitorRunDependencies?.(ua)
}
function ya() {
    ua--;
    h.monitorRunDependencies?.(ua);
    if (0 == ua && (null !== va && (clearInterval(va),
    va = null),
    wa)) {
        var a = wa;
        wa = null;
        a()
    }
}
function za(a) {
    h.onAbort?.(a);
    a = "Aborted(" + a + ")";
    k(a);
    la = !0;
    ma = 1;
    throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
}
var Aa = a=>a.startsWith("data:application/octet-stream;base64,"), Ba;
function Ca(a) {
    if (a == Ba && ja)
        return new Uint8Array(ja);
    throw "both async and sync fetching of the wasm failed";
}
function Da(a) {
    return ja ? Promise.resolve().then(()=>Ca(a)) : ha(a).then(b=>new Uint8Array(b), ()=>Ca(a))
}
function Ea(a, b, c) {
    return Da(a).then(d=>WebAssembly.instantiate(d, b)).then(c, d=>{
        k(`failed to asynchronously prepare wasm: ${d}`);
        za(d)
    }
    )
}
function Fa(a, b) {
    var c = Ba;
    ja || "function" != typeof WebAssembly.instantiateStreaming || Aa(c) || "function" != typeof fetch ? Ea(c, a, b) : fetch(c, {
        credentials: "same-origin"
    }).then(d=>WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
        k(`wasm streaming compile failed: ${e}`);
        k("falling back to ArrayBuffer instantiation");
        return Ea(c, a, b)
    }))
}
var z, A, Ma = {
    362804: a=>{
        a = (a ? B(q, a) : "") + "\n\nAbort/Retry/Ignore/AlwaysIgnore? [ariA] :";
        a = window.prompt(a, "i");
        null === a && (a = "i");
        return Ga(Ha(a), "i8", Ia)
    }
    ,
    363029: ()=>"undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? !0 : !1,
    363176: ()=>"undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? !0 : !1,
    363410: a=>{
        "undefined" === typeof h.SDL2 && (h.SDL2 = {});
        var b = h.SDL2;
        a ? b.capture = {} : b.audio = {};
        b.af || ("undefined" !== typeof AudioContext ? b.af = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.af = new webkitAudioContext),
        b.af && Ja(b.af));
        return void 0 === b.af ? -1 : 0
    }
    ,
    363903: ()=>h.SDL2.af.sampleRate,
    363971: (a,b,c,d)=>{
        function e() {}
        function f(l) {
            void 0 !== g.capture.Ef && (clearTimeout(g.capture.Ef),
            g.capture.Ef = void 0);
            g.capture.Mf = g.af.createMediaStreamSource(l);
            g.capture.ef = g.af.createScriptProcessor(b, a, 1);
            g.capture.ef.onaudioprocess = function(n) {
                void 0 !== g && void 0 !== g.capture && (n.outputBuffer.getChannelData(0).fill(0),
                g.capture.Vf = n.inputBuffer,
                Ka(c, [d]))
            }
            ;
            g.capture.Mf.connect(g.capture.ef);
            g.capture.ef.connect(g.af.destination);
            g.capture.stream = l
        }
        var g = h.SDL2;
        g.capture.Qf = g.af.createBuffer(a, b, g.af.sampleRate);
        g.capture.Qf.getChannelData(0).fill(0);
        g.capture.Ef = setTimeout(function() {
            g.capture.Vf = g.capture.Qf;
            Ka(c, [d])
        }, b / g.af.sampleRate * 1E3);
        void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
        }).then(f).catch(e) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({
            audio: !0,
            video: !1
        }, f, e)
    }
    ,
    365623: (a,b,c,d)=>{
        var e = h.SDL2;
        e.audio.ef = e.af.createScriptProcessor(b, 0, a);
        e.audio.ef.onaudioprocess = function(f) {
            void 0 !== e && void 0 !== e.audio && (e.audio.gg = f.outputBuffer,
            Ka(c, [d]))
        }
        ;
        e.audio.ef.connect(e.af.destination)
    }
    ,
    366033: (a,b)=>{
        for (var c = h.SDL2, d = c.capture.Vf.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.capture.Vf.getChannelData(e);
            if (f.length != b)
                throw "Web Audio capture buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            if (1 == d)
                for (var g = 0; g < b; ++g)
                    La(a + 4 * g, f[g]);
            else
                for (g = 0; g < b; ++g)
                    La(a + 4 * (g * d + e), f[g])
        }
    }
    ,
    366638: (a,b)=>{
        for (var c = h.SDL2, d = c.audio.gg.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.audio.gg.getChannelData(e);
            if (f.length != b)
                throw "Web Audio output buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            for (var g = 0; g < b; ++g)
                f[g] = x[a + (g * d + e << 2) >> 2]
        }
    }
    ,
    367118: a=>{
        var b = h.SDL2;
        if (a) {
            void 0 !== b.capture.Ef && clearTimeout(b.capture.Ef);
            if (void 0 !== b.capture.stream) {
                a = b.capture.stream.getAudioTracks();
                for (var c = 0; c < a.length; c++)
                    b.capture.stream.removeTrack(a[c]);
                b.capture.stream = void 0
            }
            void 0 !== b.capture.ef && (b.capture.ef.onaudioprocess = function() {}
            ,
            b.capture.ef.disconnect(),
            b.capture.ef = void 0);
            void 0 !== b.capture.Mf && (b.capture.Mf.disconnect(),
            b.capture.Mf = void 0);
            void 0 !== b.capture.Qf && (b.capture.Qf = void 0);
            b.capture = void 0
        } else
            void 0 != b.audio.ef && (b.audio.ef.disconnect(),
            b.audio.ef = void 0),
            b.audio = void 0;
        void 0 !== b.af && void 0 === b.audio && void 0 === b.capture && (b.af.close(),
        b.af = void 0)
    }
    ,
    368290: (a,b)=>{
        alert((a ? B(q, a) : "") + "\n\n" + (b ? B(q, b) : ""))
    }
    ,
    368347: ()=>window.innerWidth,
    368377: ()=>window.innerHeight,
    368408: (a,b,c)=>{
        h.SDL2 || (h.SDL2 = {});
        var d = h.SDL2;
        d.Dg !== h.canvas && (d.lf = h.createContext(h.canvas, !1, !0),
        d.Dg = h.canvas);
        if (d.w !== a || d.h !== b || d.Og !== d.lf)
            d.image = d.lf.createImageData(a, b),
            d.w = a,
            d.h = b,
            d.Og = d.lf;
        a = d.image.data;
        b = c >> 2;
        var e = 0;
        if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
            for (c = a.length; e < c; ) {
                var f = u[b];
                a[e] = f & 255;
                a[e + 1] = f >> 8 & 255;
                a[e + 2] = f >> 16 & 255;
                a[e + 3] = 255;
                b++;
                e += 4
            }
        else if (d.Gg !== a && (d.Fg = new Int32Array(a.buffer),
        d.Hg = new Uint8Array(a.buffer),
        d.Gg = a),
        a = d.Fg,
        c = a.length,
        a.set(u.subarray(b, b + c)),
        a = d.Hg,
        b = 3,
        e = b + 4 * c,
        0 == c % 8)
            for (; b < e; )
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0;
        else
            for (; b < e; )
                a[b] = 255,
                b = b + 4 | 0;
        d.lf.putImageData(d.image, 0, 0)
    }
    ,
    369877: (a,b,c,d,e)=>{
        var f = document.createElement("canvas");
        f.width = a;
        f.height = b;
        var g = f.getContext("2d");
        a = g.createImageData(a, b);
        b = a.data;
        e >>= 2;
        var l = 0, n;
        if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
            for (n = b.length; l < n; ) {
                var p = u[e];
                b[l] = p & 255;
                b[l + 1] = p >> 8 & 255;
                b[l + 2] = p >> 16 & 255;
                b[l + 3] = p >> 24 & 255;
                e++;
                l += 4
            }
        else
            b = new Int32Array(b.buffer),
            n = b.length,
            b.set(u.subarray(e, e + n));
        g.putImageData(a, 0, 0);
        c = 0 === c && 0 === d ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + c + " " + d + ", auto";
        d = C(c.length + 1);
        F(c, q, d, c.length + 1);
        return d
    }
    ,
    370866: a=>{
        h.canvas && (h.canvas.style.cursor = a ? B(q, a) : "")
    }
    ,
    370949: ()=>{
        h.canvas && (h.canvas.style.cursor = "none")
    }
};
function Na(a) {
    this.name = "ExitStatus";
    this.message = `Program terminated with exit(${a})`;
    this.status = a
}
var Oa = a=>{
    for (; 0 < a.length; )
        a.shift()(h)
}
  , Pa = h.noExitRuntime || !0;
function La(a, b) {
    var c = "float";
    c.endsWith("*") && (c = "*");
    switch (c) {
    case "i1":
        m[a] = b;
        break;
    case "i8":
        m[a] = b;
        break;
    case "i16":
        na[a >> 1] = b;
        break;
    case "i32":
        u[a >> 2] = b;
        break;
    case "i64":
        za("to do setValue(i64) use WASM_BIGINT");
    case "float":
        x[a >> 2] = b;
        break;
    case "double":
        y[a >> 3] = b;
        break;
    case "*":
        v[a >> 2] = b;
        break;
    default:
        za(`invalid type for setValue: ${c}`)
    }
}
class Qa {
    constructor(a) {
        this.Of = a - 24
    }
}
var Ra = 0
  , Sa = 0;
function Ta() {
    var a = u[+Ua >> 2];
    Ua += 4;
    return a
}
var Va = (a,b)=>{
    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1),
        c++) : c && (a.splice(d, 1),
        c--)
    }
    if (b)
        for (; c; c--)
            a.unshift("..");
    return a
}
  , Wa = a=>{
    var b = "/" === a.charAt(0)
      , c = "/" === a.substr(-1);
    (a = Va(a.split("/").filter(d=>!!d), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a
}
  , Xa = a=>{
    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
    a = b[0];
    b = b[1];
    if (!a && !b)
        return ".";
    b &&= b.substr(0, b.length - 1);
    return a + b
}
  , Ya = a=>{
    if ("/" === a)
        return "/";
    a = Wa(a);
    a = a.replace(/\/$/, "");
    var b = a.lastIndexOf("/");
    return -1 === b ? a : a.substr(b + 1)
}
  , Za = ()=>{
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
        return a=>crypto.getRandomValues(a);
    za("initRandomDevice")
}
  , $a = a=>($a = Za())(a)
  , ab = (...a)=>{
    for (var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--) {
        c = 0 <= d ? a[d] : "/";
        if ("string" != typeof c)
            throw new TypeError("Arguments to path.resolve must be strings");
        if (!c)
            return "";
        b = c + "/" + b;
        c = "/" === c.charAt(0)
    }
    b = Va(b.split("/").filter(e=>!!e), !c).join("/");
    return (c ? "/" : "") + b || "."
}
  , bb = "undefined" != typeof TextDecoder ? new TextDecoder : void 0
  , B = (a,b,c)=>{
    var d = b + c;
    for (c = b; a[c] && !(c >= d); )
        ++c;
    if (16 < c - b && a.buffer && bb)
        return bb.decode(a.subarray(b, c));
    for (d = ""; b < c; ) {
        var e = a[b++];
        if (e & 128) {
            var f = a[b++] & 63;
            if (192 == (e & 224))
                d += String.fromCharCode((e & 31) << 6 | f);
            else {
                var g = a[b++] & 63;
                e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                65536 > e ? d += String.fromCharCode(e) : (e -= 65536,
                d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
            }
        } else
            d += String.fromCharCode(e)
    }
    return d
}
  , cb = []
  , eb = a=>{
    for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4,
        ++c) : b += 3
    }
    return b
}
  , F = (a,b,c,d)=>{
    if (!(0 < d))
        return 0;
    var e = c;
    d = c + d - 1;
    for (var f = 0; f < a.length; ++f) {
        var g = a.charCodeAt(f);
        if (55296 <= g && 57343 >= g) {
            var l = a.charCodeAt(++f);
            g = 65536 + ((g & 1023) << 10) | l & 1023
        }
        if (127 >= g) {
            if (c >= d)
                break;
            b[c++] = g
        } else {
            if (2047 >= g) {
                if (c + 1 >= d)
                    break;
                b[c++] = 192 | g >> 6
            } else {
                if (65535 >= g) {
                    if (c + 2 >= d)
                        break;
                    b[c++] = 224 | g >> 12
                } else {
                    if (c + 3 >= d)
                        break;
                    b[c++] = 240 | g >> 18;
                    b[c++] = 128 | g >> 12 & 63
                }
                b[c++] = 128 | g >> 6 & 63
            }
            b[c++] = 128 | g & 63
        }
    }
    b[c] = 0;
    return c - e
}
;
function Ha(a, b) {
    var c = Array(eb(a) + 1);
    a = F(a, c, 0, c.length);
    b && (c.length = a);
    return c
}
var fb = [];
function gb(a, b) {
    fb[a] = {
        input: [],
        df: [],
        rf: b
    };
    hb(a, ib)
}
var ib = {
    open(a) {
        var b = fb[a.node.Cf];
        if (!b)
            throw new G(43);
        a.Ze = b;
        a.seekable = !1
    },
    close(a) {
        a.Ze.rf.If(a.Ze)
    },
    If(a) {
        a.Ze.rf.If(a.Ze)
    },
    read(a, b, c, d) {
        if (!a.Ze || !a.Ze.rf.jg)
            throw new G(60);
        for (var e = 0, f = 0; f < d; f++) {
            try {
                var g = a.Ze.rf.jg(a.Ze)
            } catch (l) {
                throw new G(29);
            }
            if (void 0 === g && 0 === e)
                throw new G(6);
            if (null === g || void 0 === g)
                break;
            e++;
            b[c + f] = g
        }
        e && (a.node.timestamp = Date.now());
        return e
    },
    write(a, b, c, d) {
        if (!a.Ze || !a.Ze.rf.Yf)
            throw new G(60);
        try {
            for (var e = 0; e < d; e++)
                a.Ze.rf.Yf(a.Ze, b[c + e])
        } catch (f) {
            throw new G(29);
        }
        d && (a.node.timestamp = Date.now());
        return e
    }
}
  , jb = {
    jg() {
        a: {
            if (!cb.length) {
                var a = null;
                "undefined" != typeof window && "function" == typeof window.prompt && (a = window.prompt("Input: "),
                null !== a && (a += "\n"));
                if (!a) {
                    a = null;
                    break a
                }
                cb = Ha(a, !0)
            }
            a = cb.shift()
        }
        return a
    },
    Yf(a, b) {
        null === b || 10 === b ? (ia(B(a.df, 0)),
        a.df = []) : 0 != b && a.df.push(b)
    },
    If(a) {
        a.df && 0 < a.df.length && (ia(B(a.df, 0)),
        a.df = [])
    },
    Rg() {
        return {
            gh: 25856,
            ih: 5,
            fh: 191,
            hh: 35387,
            eh: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    },
    Sg() {
        return 0
    },
    Tg() {
        return [24, 80]
    }
}
  , kb = {
    Yf(a, b) {
        null === b || 10 === b ? (k(B(a.df, 0)),
        a.df = []) : 0 != b && a.df.push(b)
    },
    If(a) {
        a.df && 0 < a.df.length && (k(B(a.df, 0)),
        a.df = [])
    }
};
function lb(a, b) {
    var c = a.Yd ? a.Yd.length : 0;
    c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0),
    0 != c && (b = Math.max(b, 256)),
    c = a.Yd,
    a.Yd = new Uint8Array(b),
    0 < a.$e && a.Yd.set(c.subarray(0, a.$e), 0))
}
var H = {
    nf: null,
    qf() {
        return H.createNode(null, "/", 16895, 0)
    },
    createNode(a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440))
            throw new G(63);
        H.nf || (H.nf = {
            dir: {
                node: {
                    mf: H.be.mf,
                    gf: H.be.gf,
                    Af: H.be.Af,
                    Nf: H.be.Nf,
                    ug: H.be.ug,
                    Sf: H.be.Sf,
                    vg: H.be.vg,
                    Pf: H.be.Pf,
                    Rf: H.be.Rf
                },
                stream: {
                    vf: H.Ye.vf
                }
            },
            file: {
                node: {
                    mf: H.be.mf,
                    gf: H.be.gf
                },
                stream: {
                    vf: H.Ye.vf,
                    read: H.Ye.read,
                    write: H.Ye.write,
                    cg: H.Ye.cg,
                    Xf: H.Ye.Xf,
                    qg: H.Ye.qg
                }
            },
            link: {
                node: {
                    mf: H.be.mf,
                    gf: H.be.gf,
                    Df: H.be.Df
                },
                stream: {}
            },
            fg: {
                node: {
                    mf: H.be.mf,
                    gf: H.be.gf
                },
                stream: mb
            }
        });
        c = nb(a, b, c, d);
        J(c.mode) ? (c.be = H.nf.dir.node,
        c.Ye = H.nf.dir.stream,
        c.Yd = {}) : 32768 === (c.mode & 61440) ? (c.be = H.nf.file.node,
        c.Ye = H.nf.file.stream,
        c.$e = 0,
        c.Yd = null) : 40960 === (c.mode & 61440) ? (c.be = H.nf.link.node,
        c.Ye = H.nf.link.stream) : 8192 === (c.mode & 61440) && (c.be = H.nf.fg.node,
        c.Ye = H.nf.fg.stream);
        c.timestamp = Date.now();
        a && (a.Yd[b] = c,
        a.timestamp = c.timestamp);
        return c
    },
    ph(a) {
        return a.Yd ? a.Yd.subarray ? a.Yd.subarray(0, a.$e) : new Uint8Array(a.Yd) : new Uint8Array(0)
    },
    be: {
        mf(a) {
            var b = {};
            b.Jg = 8192 === (a.mode & 61440) ? a.id : 1;
            b.kg = a.id;
            b.mode = a.mode;
            b.Xg = 1;
            b.uid = 0;
            b.Mg = 0;
            b.Cf = a.Cf;
            J(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.$e : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
            b.zg = new Date(a.timestamp);
            b.Wg = new Date(a.timestamp);
            b.Cg = new Date(a.timestamp);
            b.Ag = 4096;
            b.Bg = Math.ceil(b.size / b.Ag);
            return b
        },
        gf(a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            if (void 0 !== b.size && (b = b.size,
            a.$e != b))
                if (0 == b)
                    a.Yd = null,
                    a.$e = 0;
                else {
                    var c = a.Yd;
                    a.Yd = new Uint8Array(b);
                    c && a.Yd.set(c.subarray(0, Math.min(b, a.$e)));
                    a.$e = b
                }
        },
        Af() {
            throw ob[44];
        },
        Nf(a, b, c, d) {
            return H.createNode(a, b, c, d)
        },
        ug(a, b, c) {
            if (J(a.mode)) {
                try {
                    var d = pb(b, c)
                } catch (f) {}
                if (d)
                    for (var e in d.Yd)
                        throw new G(55);
            }
            delete a.parent.Yd[a.name];
            a.parent.timestamp = Date.now();
            a.name = c;
            b.Yd[c] = a;
            b.timestamp = a.parent.timestamp
        },
        Sf(a, b) {
            delete a.Yd[b];
            a.timestamp = Date.now()
        },
        vg(a, b) {
            var c = pb(a, b), d;
            for (d in c.Yd)
                throw new G(55);
            delete a.Yd[b];
            a.timestamp = Date.now()
        },
        Pf(a) {
            var b = [".", ".."], c;
            for (c of Object.keys(a.Yd))
                b.push(c);
            return b
        },
        Rf(a, b, c) {
            a = H.createNode(a, b, 41471, 0);
            a.link = c;
            return a
        },
        Df(a) {
            if (40960 !== (a.mode & 61440))
                throw new G(28);
            return a.link
        }
    },
    Ye: {
        read(a, b, c, d, e) {
            var f = a.node.Yd;
            if (e >= a.node.$e)
                return 0;
            a = Math.min(a.node.$e - e, d);
            if (8 < a && f.subarray)
                b.set(f.subarray(e, e + a), c);
            else
                for (d = 0; d < a; d++)
                    b[c + d] = f[e + d];
            return a
        },
        write(a, b, c, d, e, f) {
            if (!d)
                return 0;
            a = a.node;
            a.timestamp = Date.now();
            if (b.subarray && (!a.Yd || a.Yd.subarray)) {
                if (f)
                    return a.Yd = b.subarray(c, c + d),
                    a.$e = d;
                if (0 === a.$e && 0 === e)
                    return a.Yd = b.slice(c, c + d),
                    a.$e = d;
                if (e + d <= a.$e)
                    return a.Yd.set(b.subarray(c, c + d), e),
                    d
            }
            lb(a, e + d);
            if (a.Yd.subarray && b.subarray)
                a.Yd.set(b.subarray(c, c + d), e);
            else
                for (f = 0; f < d; f++)
                    a.Yd[e + f] = b[c + f];
            a.$e = Math.max(a.$e, e + d);
            return d
        },
        vf(a, b, c) {
            1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.$e);
            if (0 > b)
                throw new G(28);
            return b
        },
        cg(a, b, c) {
            lb(a.node, b + c);
            a.node.$e = Math.max(a.node.$e, b + c)
        },
        Xf(a, b, c, d, e) {
            if (32768 !== (a.node.mode & 61440))
                throw new G(43);
            a = a.node.Yd;
            if (e & 2 || a.buffer !== m.buffer) {
                if (0 < c || c + b < a.length)
                    a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                c = !0;
                za();
                b = void 0;
                if (!b)
                    throw new G(48);
                m.set(a, b)
            } else
                c = !1,
                b = a.byteOffset;
            return {
                Of: b,
                bh: c
            }
        },
        qg(a, b, c, d) {
            H.Ye.write(a, b, 0, d, c, !1);
            return 0
        }
    }
}
  , qb = (a,b,c)=>{
    var d = `al ${a}`;
    ha(a).then(e=>{
        b(new Uint8Array(e));
        d && ya(d)
    }
    , ()=>{
        if (c)
            c();
        else
            throw `Loading data file "${a}" failed.`;
    }
    );
    d && xa(d)
}
  , rb = h.preloadPlugins || []
  , ub = (a,b,c,d)=>{
    "undefined" != typeof sb && tb();
    var e = !1;
    rb.forEach(f=>{
        !e && f.canHandle(b) && (f.handle(a, b, c, d),
        e = !0)
    }
    );
    return e
}
  , wb = (a,b,c,d,e,f,g,l,n,p)=>{
    function r(D) {
        function E(I) {
            p?.();
            l || vb(a, b, I, d, e, n);
            f?.();
            ya(w)
        }
        ub(D, t, E, ()=>{
            g?.();
            ya(w)
        }
        ) || E(D)
    }
    var t = b ? ab(Wa(a + "/" + b)) : a
      , w = `cp ${t}`;
    xa(w);
    "string" == typeof c ? qb(c, r, g) : r(c)
}
  , xb = (a,b)=>{
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c
}
  , yb = null
  , zb = {}
  , Ab = []
  , Bb = 1
  , Cb = null
  , Db = !0
  , G = class {
    constructor(a) {
        this.name = "ErrnoError";
        this.ff = a
    }
}
  , ob = {}
  , Eb = class {
    constructor() {
        this.bf = {};
        this.node = null
    }
    get flags() {
        return this.bf.flags
    }
    set flags(a) {
        this.bf.flags = a
    }
    get position() {
        return this.bf.position
    }
    set position(a) {
        this.bf.position = a
    }
}
  , Fb = class {
    constructor(a, b, c, d) {
        a ||= this;
        this.parent = a;
        this.qf = a.qf;
        this.Bf = null;
        this.id = Bb++;
        this.name = b;
        this.mode = c;
        this.be = {};
        this.Ye = {};
        this.Cf = d
    }
    get read() {
        return 365 === (this.mode & 365)
    }
    set read(a) {
        a ? this.mode |= 365 : this.mode &= -366
    }
    get write() {
        return 146 === (this.mode & 146)
    }
    set write(a) {
        a ? this.mode |= 146 : this.mode &= -147
    }
    get Ug() {
        return J(this.mode)
    }
    get mg() {
        return 8192 === (this.mode & 61440)
    }
}
;
function K(a, b={}) {
    a = ab(a);
    if (!a)
        return {
            path: "",
            node: null
        };
    b = Object.assign({
        ig: !0,
        Zf: 0
    }, b);
    if (8 < b.Zf)
        throw new G(32);
    a = a.split("/").filter(g=>!!g);
    for (var c = yb, d = "/", e = 0; e < a.length; e++) {
        var f = e === a.length - 1;
        if (f && b.parent)
            break;
        c = pb(c, a[e]);
        d = Wa(d + "/" + a[e]);
        c.Bf && (!f || f && b.ig) && (c = c.Bf.root);
        if (!f || b.zf)
            for (f = 0; 40960 === (c.mode & 61440); )
                if (c = Gb(d),
                d = ab(Xa(d), c),
                c = K(d, {
                    Zf: b.Zf + 1
                }).node,
                40 < f++)
                    throw new G(32);
    }
    return {
        path: d,
        node: c
    }
}
function Hb(a) {
    for (var b; ; ) {
        if (a === a.parent)
            return a = a.qf.pg,
            b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
        b = b ? `${a.name}/${b}` : a.name;
        a = a.parent
    }
}
function Ib(a, b) {
    for (var c = 0, d = 0; d < b.length; d++)
        c = (c << 5) - c + b.charCodeAt(d) | 0;
    return (a + c >>> 0) % Cb.length
}
function pb(a, b) {
    var c = J(a.mode) ? (c = Jb(a, "x")) ? c : a.be.Af ? 0 : 2 : 54;
    if (c)
        throw new G(c);
    for (c = Cb[Ib(a.id, b)]; c; c = c.xf) {
        var d = c.name;
        if (c.parent.id === a.id && d === b)
            return c
    }
    return a.be.Af(a, b)
}
function nb(a, b, c, d) {
    a = new Fb(a,b,c,d);
    b = Ib(a.parent.id, a.name);
    a.xf = Cb[b];
    return Cb[b] = a
}
function J(a) {
    return 16384 === (a & 61440)
}
function Kb(a) {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b
}
function Jb(a, b) {
    if (Db)
        return 0;
    if (!b.includes("r") || a.mode & 292) {
        if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73))
            return 2
    } else
        return 2;
    return 0
}
function Lb(a, b) {
    try {
        return pb(a, b),
        20
    } catch (c) {}
    return Jb(a, "wx")
}
function Mb(a) {
    a = Ab[a];
    if (!a)
        throw new G(8);
    return a
}
function Nb(a, b=-1) {
    a = Object.assign(new Eb, a);
    if (-1 == b)
        a: {
            for (b = 0; 4096 >= b; b++)
                if (!Ab[b])
                    break a;
            throw new G(33);
        }
    a.fd = b;
    return Ab[b] = a
}
function Ob(a, b=-1) {
    a = Nb(a, b);
    a.Ye?.lh?.(a);
    return a
}
var mb = {
    open(a) {
        a.Ye = zb[a.node.Cf].Ye;
        a.Ye.open?.(a)
    },
    vf() {
        throw new G(70);
    }
};
function hb(a, b) {
    zb[a] = {
        Ye: b
    }
}
function Pb(a, b) {
    var c = "/" === b;
    if (c && yb)
        throw new G(10);
    if (!c && b) {
        var d = K(b, {
            ig: !1
        });
        b = d.path;
        d = d.node;
        if (d.Bf)
            throw new G(10);
        if (!J(d.mode))
            throw new G(54);
    }
    b = {
        type: a,
        vh: {},
        pg: b,
        Vg: []
    };
    a = a.qf(b);
    a.qf = b;
    b.root = a;
    c ? yb = a : d && (d.Bf = b,
    d.qf && d.qf.Vg.push(b))
}
function Qb(a, b, c) {
    var d = K(a, {
        parent: !0
    }).node;
    a = Ya(a);
    if (!a || "." === a || ".." === a)
        throw new G(28);
    var e = Lb(d, a);
    if (e)
        throw new G(e);
    if (!d.be.Nf)
        throw new G(63);
    return d.be.Nf(d, a, b, c)
}
function L(a, b) {
    return Qb(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0)
}
function Rb(a, b, c) {
    "undefined" == typeof c && (c = b,
    b = 438);
    return Qb(a, b | 8192, c)
}
function Sb(a, b) {
    if (!ab(a))
        throw new G(44);
    var c = K(b, {
        parent: !0
    }).node;
    if (!c)
        throw new G(44);
    b = Ya(b);
    var d = Lb(c, b);
    if (d)
        throw new G(d);
    if (!c.be.Rf)
        throw new G(63);
    c.be.Rf(c, b, a)
}
function Tb(a) {
    var b = K(a, {
        parent: !0
    }).node;
    if (!b)
        throw new G(44);
    var c = Ya(a);
    a = pb(b, c);
    a: {
        try {
            var d = pb(b, c)
        } catch (f) {
            d = f.ff;
            break a
        }
        var e = Jb(b, "wx");
        d = e ? e : J(d.mode) ? 31 : 0
    }
    if (d)
        throw new G(d);
    if (!b.be.Sf)
        throw new G(63);
    if (a.Bf)
        throw new G(10);
    b.be.Sf(b, c);
    b = Ib(a.parent.id, a.name);
    if (Cb[b] === a)
        Cb[b] = a.xf;
    else
        for (b = Cb[b]; b; ) {
            if (b.xf === a) {
                b.xf = a.xf;
                break
            }
            b = b.xf
        }
}
function Gb(a) {
    a = K(a).node;
    if (!a)
        throw new G(44);
    if (!a.be.Df)
        throw new G(28);
    return ab(Hb(a.parent), a.be.Df(a))
}
function Ub(a, b) {
    a = "string" == typeof a ? K(a, {
        zf: !0
    }).node : a;
    if (!a.be.gf)
        throw new G(63);
    a.be.gf(a, {
        mode: b & 4095 | a.mode & -4096,
        timestamp: Date.now()
    })
}
function Vb(a, b, c) {
    if ("" === a)
        throw new G(44);
    if ("string" == typeof b) {
        var d = {
            r: 0,
            "r+": 2,
            w: 577,
            "w+": 578,
            a: 1089,
            "a+": 1090
        }[b];
        if ("undefined" == typeof d)
            throw Error(`Unknown file open mode: ${b}`);
        b = d
    }
    c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" == typeof a)
        var e = a;
    else {
        a = Wa(a);
        try {
            e = K(a, {
                zf: !(b & 131072)
            }).node
        } catch (f) {}
    }
    d = !1;
    if (b & 64)
        if (e) {
            if (b & 128)
                throw new G(20);
        } else
            e = Qb(a, c, 0),
            d = !0;
    if (!e)
        throw new G(44);
    8192 === (e.mode & 61440) && (b &= -513);
    if (b & 65536 && !J(e.mode))
        throw new G(54);
    if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : J(e.mode) && ("r" !== Kb(b) || b & 512) ? 31 : Jb(e, Kb(b)) : 44))
        throw new G(c);
    if (b & 512 && !d) {
        c = e;
        c = "string" == typeof c ? K(c, {
            zf: !0
        }).node : c;
        if (!c.be.gf)
            throw new G(63);
        if (J(c.mode))
            throw new G(31);
        if (32768 !== (c.mode & 61440))
            throw new G(28);
        if (d = Jb(c, "w"))
            throw new G(d);
        c.be.gf(c, {
            size: 0,
            timestamp: Date.now()
        })
    }
    b &= -131713;
    e = Nb({
        node: e,
        path: Hb(e),
        flags: b,
        seekable: !0,
        position: 0,
        Ye: e.Ye,
        Zg: [],
        error: !1
    });
    e.Ye.open && e.Ye.open(e);
    !h.logReadFiles || b & 1 || (Wb ||= {},
    a in Wb || (Wb[a] = 1));
    return e
}
function Xb(a) {
    if (null === a.fd)
        throw new G(8);
    a.uf && (a.uf = null);
    try {
        a.Ye.close && a.Ye.close(a)
    } catch (b) {
        throw b;
    } finally {
        Ab[a.fd] = null
    }
    a.fd = null
}
function Yb(a, b, c) {
    if (null === a.fd)
        throw new G(8);
    if (!a.seekable || !a.Ye.vf)
        throw new G(70);
    if (0 != c && 1 != c && 2 != c)
        throw new G(28);
    a.position = a.Ye.vf(a, b, c);
    a.Zg = [];
    return a.position
}
function Zb(a, b, c, d, e, f) {
    if (0 > d || 0 > e)
        throw new G(28);
    if (null === a.fd)
        throw new G(8);
    if (0 === (a.flags & 2097155))
        throw new G(8);
    if (J(a.node.mode))
        throw new G(31);
    if (!a.Ye.write)
        throw new G(28);
    a.seekable && a.flags & 1024 && Yb(a, 0, 2);
    var g = "undefined" != typeof e;
    if (!g)
        e = a.position;
    else if (!a.seekable)
        throw new G(70);
    b = a.Ye.write(a, b, c, d, e, f);
    g || (a.position += b);
    return b
}
var $b;
function ac(a, b) {
    a = "string" == typeof a ? a : Hb(a);
    for (b = b.split("/").reverse(); b.length; ) {
        var c = b.pop();
        if (c) {
            var d = Wa(a + "/" + c);
            try {
                L(d)
            } catch (e) {}
            a = d
        }
    }
    return d
}
function bc(a, b, c, d) {
    a = Wa(("string" == typeof a ? a : Hb(a)) + "/" + b);
    c = xb(c, d);
    return Qb(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0)
}
function vb(a, b, c, d, e, f) {
    var g = b;
    a && (a = "string" == typeof a ? a : Hb(a),
    g = b ? Wa(a + "/" + b) : a);
    a = xb(d, e);
    g = Qb(g, (void 0 !== a ? a : 438) & 4095 | 32768, 0);
    if (c) {
        if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d)
                b[d] = c.charCodeAt(d);
            c = b
        }
        Ub(g, a | 146);
        b = Vb(g, 577);
        Zb(b, c, 0, c.length, 0, f);
        Xb(b);
        Ub(g, a)
    }
}
function cc(a, b, c, d) {
    a = Wa(("string" == typeof a ? a : Hb(a)) + "/" + b);
    b = xb(!!c, !!d);
    cc.ng || (cc.ng = 64);
    var e = cc.ng++ << 8 | 0;
    hb(e, {
        open(f) {
            f.seekable = !1
        },
        close() {
            d?.buffer?.length && d(10)
        },
        read(f, g, l, n) {
            for (var p = 0, r = 0; r < n; r++) {
                try {
                    var t = c()
                } catch (w) {
                    throw new G(29);
                }
                if (void 0 === t && 0 === p)
                    throw new G(6);
                if (null === t || void 0 === t)
                    break;
                p++;
                g[l + r] = t
            }
            p && (f.node.timestamp = Date.now());
            return p
        },
        write(f, g, l, n) {
            for (var p = 0; p < n; p++)
                try {
                    d(g[l + p])
                } catch (r) {
                    throw new G(29);
                }
            n && (f.node.timestamp = Date.now());
            return p
        }
    });
    return Rb(a, b, e)
}
function dc(a) {
    if (!(a.mg || a.Ug || a.link || a.Yd)) {
        if ("undefined" != typeof XMLHttpRequest)
            throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        try {
            a.Yd = (void 0)(a.url),
            a.$e = a.Yd.length
        } catch (b) {
            throw new G(29);
        }
    }
}
function ec(a, b, c, d, e) {
    if ("undefined" != typeof XMLHttpRequest)
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    c = {
        mg: !1,
        url: c
    };
    var f = bc(a, b, d, e);
    c.Yd ? f.Yd = c.Yd : c.url && (f.Yd = null,
    f.url = c.url);
    Object.defineProperties(f, {
        $e: {
            get: function() {
                return this.Yd.length
            }
        }
    });
    var g = {};
    Object.keys(f.Ye).forEach(l=>{
        var n = f.Ye[l];
        g[l] = (...p)=>{
            dc(f);
            return n(...p)
        }
    }
    );
    g.read = (l,n,p,r,t)=>{
        dc(f);
        l = l.node.Yd;
        if (t >= l.length)
            n = 0;
        else {
            r = Math.min(l.length - t, r);
            if (l.slice)
                for (var w = 0; w < r; w++)
                    n[p + w] = l[t + w];
            else
                for (w = 0; w < r; w++)
                    n[p + w] = l.get(t + w);
            n = r
        }
        return n
    }
    ;
    g.Xf = ()=>{
        dc(f);
        za();
        throw new G(48);
    }
    ;
    f.Ye = g;
    return f
}
var fc = {}, Wb;
function gc(a, b) {
    if ("/" === b.charAt(0))
        return b;
    a = -100 === a ? "/" : Mb(a).path;
    if (0 == b.length)
        throw new G(44);
    return Wa(a + "/" + b)
}
var Ua = void 0, hc = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], ic = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], tc = (a,b)=>{
    jc = a;
    kc = b;
    if (lc)
        if (mc ||= !0,
        0 == a)
            nc = function() {
                var d = Math.max(0, oc + b - pc()) | 0;
                setTimeout(qc, d)
            }
            ;
        else if (1 == a)
            nc = function() {
                rc(qc)
            }
            ;
        else if (2 == a) {
            if ("undefined" == typeof sc)
                if ("undefined" == typeof setImmediate) {
                    var c = [];
                    addEventListener("message", d=>{
                        if ("setimmediate" === d.data || "setimmediate" === d.data.target)
                            d.stopPropagation(),
                            c.shift()()
                    }
                    , !0);
                    sc = function(d) {
                        c.push(d);
                        postMessage("setimmediate", "*")
                    }
                } else
                    sc = setImmediate;
            nc = function() {
                sc(qc)
            }
        }
}
, pc;
pc = ()=>performance.now();
var Ac = a=>{
    lc = a;
    var b = uc;
    mc = !1;
    qc = function() {
        if (!la)
            if (0 < vc.length) {
                var c = vc.shift();
                c.oh(c.dh);
                if (wc) {
                    var d = wc
                      , e = 0 == d % 1 ? d - 1 : Math.floor(d);
                    wc = c.kh ? e : (8 * d + (e + .5)) / 9
                }
                h.setStatus && (c = h.statusMessage || "Please wait...",
                d = wc,
                e = xc.mh,
                d ? d < e ? h.setStatus("{message} ({expected - remaining}/{expected})") : h.setStatus(c) : h.setStatus(""));
                b < uc || setTimeout(qc, 0)
            } else
                b < uc || (yc = yc + 1 | 0,
                1 == jc && 1 < kc && 0 != yc % kc ? nc() : (0 == jc && (oc = pc()),
                la || h.preMainLoop && !1 === h.preMainLoop() || (zc(a),
                h.postMainLoop?.()),
                b < uc || ("object" == typeof SDL && SDL.audio?.wh?.(),
                nc())))
    }
}
  , Bc = a=>{
    a instanceof Na || "unwind" == a || ea(1, a)
}
  , Cc = 0
  , Dc = a=>{
    ma = a;
    Pa || 0 < Cc || (h.onExit?.(a),
    la = !0);
    ea(a, new Na(a))
}
  , Ec = a=>{
    ma = a;
    Dc(a)
}
  , zc = a=>{
    if (!la)
        try {
            if (a(),
            !(Pa || 0 < Cc))
                try {
                    ma = a = ma,
                    Dc(a)
                } catch (b) {
                    Bc(b)
                }
        } catch (b) {
            Bc(b)
        }
}
  , Fc = (a,b)=>setTimeout(()=>{
    zc(a)
}
, b)
  , mc = !1
  , nc = null
  , uc = 0
  , lc = null
  , jc = 0
  , kc = 0
  , yc = 0
  , vc = [];
function Gc() {
    nc = null;
    uc++
}
function Hc() {
    uc++;
    var a = jc
      , b = kc
      , c = lc;
    lc = null;
    Ac(c);
    tc(a, b);
    nc()
}
var xc = {}, oc, qc, wc, Ic = !1, Jc = !1, Kc = [];
function tb() {
    function a() {
        Jc = document.pointerLockElement === h.canvas || document.mozPointerLockElement === h.canvas || document.webkitPointerLockElement === h.canvas || document.msPointerLockElement === h.canvas
    }
    if (!Lc) {
        Lc = !0;
        rb.push({
            canHandle: function(c) {
                return !h.uh && /\.(jpg|jpeg|png|bmp)$/i.test(c)
            },
            handle: function(c, d, e, f) {
                var g = new Blob([c],{
                    type: Mc(d)
                });
                g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer],{
                    type: Mc(d)
                }));
                var l = URL.createObjectURL(g)
                  , n = new Image;
                n.onload = ()=>{
                    var p = document.createElement("canvas");
                    p.width = n.width;
                    p.height = n.height;
                    p.getContext("2d").drawImage(n, 0, 0);
                    Nc[d] = p;
                    URL.revokeObjectURL(l);
                    e?.(c)
                }
                ;
                n.onerror = ()=>{
                    k(`Image ${l} could not be decoded`);
                    f?.()
                }
                ;
                n.src = l
            }
        });
        rb.push({
            canHandle: function(c) {
                return !h.th && c.substr(-4)in {
                    ".ogg": 1,
                    ".wav": 1,
                    ".mp3": 1
                }
            },
            handle: function(c, d, e) {
                function f() {
                    g || (g = !0,
                    e?.(c))
                }
                var g = !1
                  , l = URL.createObjectURL(new Blob([c],{
                    type: Mc(d)
                }))
                  , n = new Audio;
                n.addEventListener("canplaythrough", ()=>f(n), !1);
                n.onerror = function() {
                    if (!g) {
                        k(`warning: browser could not fully decode audio ${d}, trying slower base64 approach`);
                        for (var p = "", r = 0, t = 0, w = 0; w < c.length; w++)
                            for (r = r << 8 | c[w],
                            t += 8; 6 <= t; ) {
                                var D = r >> t - 6 & 63;
                                t -= 6;
                                p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[D]
                            }
                        2 == t ? (p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(r & 3) << 4],
                        p += "==") : 4 == t && (p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(r & 15) << 2],
                        p += "=");
                        n.src = "data:audio/x-" + d.substr(-3) + ";base64," + p;
                        f(n)
                    }
                }
                ;
                n.src = l;
                Fc(()=>{
                    f(n)
                }
                , 1E4)
            }
        });
        var b = h.canvas;
        b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || (()=>{}
        ),
        b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (()=>{}
        ),
        b.exitPointerLock = b.exitPointerLock.bind(document),
        document.addEventListener("pointerlockchange", a, !1),
        document.addEventListener("mozpointerlockchange", a, !1),
        document.addEventListener("webkitpointerlockchange", a, !1),
        document.addEventListener("mspointerlockchange", a, !1),
        h.elementPointerLock && b.addEventListener("click", c=>{
            !Jc && h.canvas.requestPointerLock && (h.canvas.requestPointerLock(),
            c.preventDefault())
        }
        , !1))
    }
}
var Oc = !1
  , Pc = void 0
  , Qc = void 0;
function Rc() {
    if (!Ic)
        return !1;
    (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || (()=>{}
    )).apply(document, []);
    return !0
}
var Sc = 0;
function rc(a) {
    if ("function" == typeof requestAnimationFrame)
        requestAnimationFrame(a);
    else {
        var b = Date.now();
        if (0 === Sc)
            Sc = b + 1E3 / 60;
        else
            for (; b + 2 >= Sc; )
                Sc += 1E3 / 60;
        setTimeout(a, Math.max(Sc - b, 0))
    }
}
function Mc(a) {
    return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
    }[a.substr(a.lastIndexOf(".") + 1)]
}
var Tc = [];
function Uc() {
    var a = h.canvas;
    Tc.forEach(b=>b(a.width, a.height))
}
function Vc(a, b, c) {
    b && c ? (a.ah = b,
    a.Ng = c) : (b = a.ah,
    c = a.Ng);
    var d = b
      , e = c;
    h.forcedAspectRatio && 0 < h.forcedAspectRatio && (d / e < h.forcedAspectRatio ? d = Math.round(e * h.forcedAspectRatio) : e = Math.round(d / h.forcedAspectRatio));
    if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
        var f = Math.min(screen.width / d, screen.height / e);
        d = Math.round(d * f);
        e = Math.round(e * f)
    }
    Qc ? (a.width != d && (a.width = d),
    a.height != e && (a.height = e),
    "undefined" != typeof a.style && (a.style.removeProperty("width"),
    a.style.removeProperty("height"))) : (a.width != b && (a.width = b),
    a.height != c && (a.height = c),
    "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"),
    a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"),
    a.style.removeProperty("height"))))
}
var sb = {}, sc, Lc, M = 12288, Wc = !1, Xc = 0, Yc = 0, Zc = 0, N = {
    alpha: !1,
    depth: !1,
    stencil: !1,
    antialias: !1
}, $c = {}, ad, bd = a=>{
    var b = a.getExtension("ANGLE_instanced_arrays");
    b && (a.vertexAttribDivisor = (c,d)=>b.vertexAttribDivisorANGLE(c, d),
    a.drawArraysInstanced = (c,d,e,f)=>b.drawArraysInstancedANGLE(c, d, e, f),
    a.drawElementsInstanced = (c,d,e,f,g)=>b.drawElementsInstancedANGLE(c, d, e, f, g))
}
, cd = a=>{
    var b = a.getExtension("OES_vertex_array_object");
    b && (a.createVertexArray = ()=>b.createVertexArrayOES(),
    a.deleteVertexArray = c=>b.deleteVertexArrayOES(c),
    a.bindVertexArray = c=>b.bindVertexArrayOES(c),
    a.isVertexArray = c=>b.isVertexArrayOES(c))
}
, dd = a=>{
    var b = a.getExtension("WEBGL_draw_buffers");
    b && (a.drawBuffers = (c,d)=>b.drawBuffersWEBGL(c, d))
}
, ed = a=>{
    var b = "ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw".split(" ");
    return (a.getSupportedExtensions() || []).filter(c=>b.includes(c))
}
, fd = 1, gd = [], O = [], hd = [], jd = [], kd = [], P = [], ld = [], md = [], nd = [], od = {}, pd = 4, qd = 0, rd = a=>{
    for (var b = fd++, c = a.length; c < b; c++)
        a[c] = null;
    return b
}
, sd = (a,b,c,d)=>{
    for (var e = 0; e < a; e++) {
        var f = Q[c]()
          , g = f && rd(d);
        f ? (f.name = g,
        d[g] = f) : R ||= 1282;
        u[b + 4 * e >> 2] = g
    }
}
, ud = (a,b)=>{
    a.bf || (a.bf = a.getContext,
    a.getContext = function(d, e) {
        e = a.bf(d, e);
        return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
    }
    );
    var c = a.getContext("webgl", b);
    return c ? td(c, b) : 0
}
, td = (a,b)=>{
    var c = rd(md)
      , d = {
        handle: c,
        attributes: b,
        version: b.og,
        sf: a
    };
    a.canvas && (a.canvas.yf = d);
    md[c] = d;
    ("undefined" == typeof b.Kg || b.Kg) && vd(d);
    return c
}
, xd = a=>{
    wd = md[a];
    h.lf = Q = wd?.sf
}
, vd = a=>{
    a ||= wd;
    if (!a.Pg) {
        a.Pg = !0;
        var b = a.sf;
        bd(b);
        cd(b);
        dd(b);
        b.pf = b.getExtension("EXT_disjoint_timer_query");
        b.sh = b.getExtension("WEBGL_multi_draw");
        ed(b).forEach(c=>{
            c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
        }
        )
    }
}
, yd = {}, R, wd, zd = a=>{
    var b = eb(a) + 1
      , c = C(b);
    c && F(a, q, c, b);
    return c
}
, Ad = [], Bd = (a,b)=>{
    Ad.length = 0;
    for (var c; c = q[a++]; ) {
        var d = 105 != c;
        d &= 112 != c;
        b += d && b % 8 ? 4 : 0;
        Ad.push(112 == c ? v[b >> 2] : 105 == c ? u[b >> 2] : y[b >> 3]);
        b += d ? 8 : 4
    }
    return Ad
}
, Cd = 0, Dd = [];
function Ed(a, b, c) {
    function d(g, l) {
        if (g.length != l.length)
            return !1;
        for (var n in g)
            if (g[n] != l[n])
                return !1;
        return !0
    }
    for (var e in Dd) {
        var f = Dd[e];
        if (f.ag == a && d(f.dg, c))
            return
    }
    Dd.push({
        ag: a,
        sg: b,
        dg: c
    });
    Dd.sort((g,l)=>g.sg < l.sg)
}
function Fd(a) {
    for (var b = 0; b < Dd.length; ++b)
        Dd[b].ag == a && (Dd.splice(b, 1),
        --b)
}
function Gd() {
    return navigator.userActivation ? navigator.userActivation.isActive : Cd && Hd.Gf
}
function Id() {
    if (Gd())
        for (var a = 0; a < Dd.length; ++a) {
            var b = Dd[a];
            Dd.splice(a, 1);
            --a;
            b.ag(...b.dg)
        }
}
var Jd = [];
function Kd(a) {
    var b = Jd[a];
    b.target.removeEventListener(b.cf, b.hg, b.hf);
    Jd.splice(a, 1)
}
function Ld(a) {
    if (!a.target)
        return -4;
    if (a.jf)
        a.hg = function(c) {
            ++Cd;
            Hd = a;
            Id();
            a.kf(c);
            Id();
            --Cd
        }
        ,
        a.target.addEventListener(a.cf, a.hg, a.hf),
        Jd.push(a);
    else
        for (var b = 0; b < Jd.length; ++b)
            Jd[b].target == a.target && Jd[b].cf == a.cf && Kd(b--);
    return 0
}
function Md(a) {
    return a ? a == window ? "#window" : a == screen ? "#screen" : a?.nodeName || "" : ""
}
function Nd() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled
}
var Od = {}, Hd, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae = {}, be = [0, document, window], S = a=>{
    a = 2 < a ? a ? B(q, a) : "" : a;
    return be[a] || document.querySelector(a)
}
, de = a=>{
    var b = eb(a) + 1
      , c = ce(b);
    F(a, q, c, b);
    return c
}
, ee = a=>{
    var b = T()
      , c = ce(8)
      , d = c + 4;
    a = de(a.id);
    if (a = S(a))
        u[c >> 2] = a.width,
        u[d >> 2] = a.height;
    c = [u[c >> 2], u[d >> 2]];
    U(b);
    return c
}
, fe = (a,b,c)=>{
    a = S(a);
    if (!a)
        return -4;
    a.width = b;
    a.height = c;
    return 0
}
, ge = (a,b,c)=>{
    if (a.jh) {
        var d = T();
        a = de(a.id);
        fe(a, b, c);
        U(d)
    } else
        a.width = b,
        a.height = c
}
, he = a=>{
    function b() {
        document.fullscreenElement || document.webkitFullscreenElement || (document.removeEventListener("fullscreenchange", b),
        document.removeEventListener("webkitfullscreenchange", b),
        ge(a, d, e),
        a.style.width = f,
        a.style.height = g,
        a.style.backgroundColor = l,
        n || (document.body.style.backgroundColor = "white"),
        document.body.style.backgroundColor = n,
        a.style.paddingLeft = p,
        a.style.paddingRight = r,
        a.style.paddingTop = t,
        a.style.paddingBottom = w,
        a.style.marginLeft = D,
        a.style.marginRight = E,
        a.style.marginTop = I,
        a.style.marginBottom = ca,
        document.body.style.margin = db,
        document.documentElement.style.overflow = lf,
        document.body.scroll = mf,
        a.style.tf = nf,
        a.yf && a.yf.sf.viewport(0, 0, d, e),
        ae.Hf && V(ae.Hf, 37, 0, ae.eg))
    }
    var c = ee(a)
      , d = c[0]
      , e = c[1]
      , f = a.style.width
      , g = a.style.height
      , l = a.style.backgroundColor
      , n = document.body.style.backgroundColor
      , p = a.style.paddingLeft
      , r = a.style.paddingRight
      , t = a.style.paddingTop
      , w = a.style.paddingBottom
      , D = a.style.marginLeft
      , E = a.style.marginRight
      , I = a.style.marginTop
      , ca = a.style.marginBottom
      , db = document.body.style.margin
      , lf = document.documentElement.style.overflow
      , mf = document.body.scroll
      , nf = a.style.tf;
    document.addEventListener("fullscreenchange", b);
    document.addEventListener("webkitfullscreenchange", b)
}
, ie = (a,b,c)=>{
    a.style.paddingLeft = a.style.paddingRight = c + "px";
    a.style.paddingTop = a.style.paddingBottom = b + "px"
}
, je = a=>0 > be.indexOf(a) ? a.getBoundingClientRect() : {
    left: 0,
    top: 0
}, ke = (a,b)=>{
    if (0 != b.$f || 0 != b.Uf) {
        he(a);
        var c = b.Yg ? innerWidth : screen.width
          , d = b.Yg ? innerHeight : screen.height
          , e = je(a)
          , f = e.width;
        e = e.height;
        var g = ee(a)
          , l = g[0];
        g = g[1];
        3 == b.$f ? (ie(a, (d - e) / 2, (c - f) / 2),
        c = f,
        d = e) : 2 == b.$f && (c * g < l * d ? (f = g * c / l,
        ie(a, (d - f) / 2, 0),
        d = f) : (f = l * d / g,
        ie(a, 0, (c - f) / 2),
        c = f));
        a.style.backgroundColor || (a.style.backgroundColor = "black");
        document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
        a.style.width = c + "px";
        a.style.height = d + "px";
        1 == b.Lg && (a.style.tf = "optimizeSpeed",
        a.style.tf = "-moz-crisp-edges",
        a.style.tf = "-o-crisp-edges",
        a.style.tf = "-webkit-optimize-contrast",
        a.style.tf = "optimize-contrast",
        a.style.tf = "crisp-edges",
        a.style.tf = "pixelated");
        f = 2 == b.Uf ? devicePixelRatio : 1;
        0 != b.Uf && (c = c * f | 0,
        d = d * f | 0,
        ge(a, c, d),
        a.yf && a.yf.sf.viewport(0, 0, c, d))
    }
    if (a.requestFullscreen)
        a.requestFullscreen();
    else if (a.webkitRequestFullscreen)
        a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    else
        return Nd() ? -3 : -1;
    ae = b;
    b.Hf && V(b.Hf, 37, 0, b.eg);
    return 0
}
, le = a=>{
    if (a.requestPointerLock)
        a.requestPointerLock();
    else
        return document.body.requestPointerLock ? -3 : -1;
    return 0
}
, me = (a,b)=>{
    y[a >> 3] = b.timestamp;
    for (var c = 0; c < b.axes.length; ++c)
        y[a + 8 * c + 16 >> 3] = b.axes[c];
    for (c = 0; c < b.buttons.length; ++c)
        y[a + 8 * c + 528 >> 3] = "object" == typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
    for (c = 0; c < b.buttons.length; ++c)
        m[a + c + 1040] = "object" == typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
    m[a + 1104] = b.connected;
    u[a + 1108 >> 2] = b.index;
    u[a + 8 >> 2] = b.axes.length;
    u[a + 12 >> 2] = b.buttons.length;
    F(b.id, q, a + 1112, 64);
    F(b.mapping, q, a + 1176, 64)
}
, ne = (a,b,c)=>{
    a = ab(a);
    a = Nc[a];
    if (!a)
        return 0;
    var d = a.getContext("2d").getImageData(0, 0, a.width, a.height)
      , e = C(a.width * a.height * 4);
    q.set(d.data, e);
    u[b >> 2] = a.width;
    u[c >> 2] = a.height;
    return e
}
, oe = [], pe = (a,b,c,d,e,f,g,l)=>{
    b = O[b];
    if (a = Q[a](b, c))
        d = l && F(a.name, q, l, d),
        e && (u[e >> 2] = d),
        f && (u[f >> 2] = a.size),
        g && (u[g >> 2] = a.type)
}
, qe = (a,b,c)=>{
    if (b) {
        var d = void 0;
        switch (a) {
        case 36346:
            d = 1;
            break;
        case 36344:
            0 != c && 1 != c && (R ||= 1280);
            return;
        case 36345:
            d = 0;
            break;
        case 34466:
            var e = Q.getParameter(34467);
            d = e ? e.length : 0
        }
        if (void 0 === d)
            switch (e = Q.getParameter(a),
            typeof e) {
            case "number":
                d = e;
                break;
            case "boolean":
                d = e ? 1 : 0;
                break;
            case "string":
                R ||= 1280;
                return;
            case "object":
                if (null === e)
                    switch (a) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 34068:
                        d = 0;
                        break;
                    default:
                        R ||= 1280;
                        return
                    }
                else {
                    if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                        for (a = 0; a < e.length; ++a)
                            switch (c) {
                            case 0:
                                u[b + 4 * a >> 2] = e[a];
                                break;
                            case 2:
                                x[b + 4 * a >> 2] = e[a];
                                break;
                            case 4:
                                m[b + a] = e[a] ? 1 : 0
                            }
                        return
                    }
                    try {
                        d = e.name | 0
                    } catch (f) {
                        R ||= 1280;
                        k(`GL_INVALID_ENUM in glGet${c}v: Unknown object returned from WebGL getParameter(${a})! (error: ${f})`);
                        return
                    }
                }
                break;
            default:
                R ||= 1280;
                k(`GL_INVALID_ENUM in glGet${c}v: Native code calling glGet${c}v(${a}) and it returns ${e} of type ${typeof e}!`);
                return
            }
        switch (c) {
        case 1:
            c = d;
            v[b >> 2] = c;
            v[b + 4 >> 2] = (c - v[b >> 2]) / 4294967296;
            break;
        case 0:
            u[b >> 2] = d;
            break;
        case 2:
            x[b >> 2] = d;
            break;
        case 4:
            m[b] = d ? 1 : 0
        }
    } else
        R ||= 1281
}
, re = (a,b,c)=>{
    if (c) {
        a = Q.pf.getQueryObjectEXT(nd[a], b);
        var d;
        "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
        v[c >> 2] = d;
        v[c + 4 >> 2] = (d - v[c >> 2]) / 4294967296
    } else
        R ||= 1281
}
, se = (a,b,c)=>{
    if (c) {
        a = Q.pf.getQueryObjectEXT(nd[a], b);
        var d;
        "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
        u[c >> 2] = d
    } else
        R ||= 1281
}
;
function te() {
    var a = ed(Q);
    return a = a.concat(a.map(b=>"GL_" + b))
}
var ue = a=>"]" == a.slice(-1) && a.lastIndexOf("["), ve = a=>{
    var b = a.Ff, c = a.xg, d;
    if (!b)
        for (a.Ff = b = {},
        a.wg = {},
        d = 0; d < Q.getProgramParameter(a, 35718); ++d) {
            var e = Q.getActiveUniform(a, d);
            var f = e.name;
            e = e.size;
            var g = ue(f);
            g = 0 < g ? f.slice(0, g) : f;
            var l = a.bg;
            a.bg += e;
            c[g] = [e, l];
            for (f = 0; f < e; ++f)
                b[l] = f,
                a.wg[l++] = g
        }
}
, W = a=>{
    var b = Q.Eg;
    if (b) {
        var c = b.Ff[a];
        "number" == typeof c && (b.Ff[a] = c = Q.getUniformLocation(b, b.wg[a] + (0 < c ? `[${c}]` : "")));
        return c
    }
    R ||= 1282
}
, we = (a,b,c,d)=>{
    if (c)
        if (a = O[a],
        ve(a),
        a = Q.getUniform(a, W(b)),
        "number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                u[c >> 2] = a;
                break;
            case 2:
                x[c >> 2] = a
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    u[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    x[c + 4 * b >> 2] = a[b]
                }
    else
        R ||= 1281
}
, xe = (a,b,c,d)=>{
    if (c)
        if (a = Q.getVertexAttrib(a, b),
        34975 == b)
            u[c >> 2] = a && a.name;
        else if ("number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                u[c >> 2] = a;
                break;
            case 2:
                x[c >> 2] = a;
                break;
            case 5:
                u[c >> 2] = Math.fround(a)
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    u[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    x[c + 4 * b >> 2] = a[b];
                    break;
                case 5:
                    u[c + 4 * b >> 2] = Math.fround(a[b])
                }
    else
        R ||= 1281
}
, ye = (a,b,c,d,e)=>{
    a -= 5120;
    a = 1 == a ? q : 4 == a ? u : 6 == a ? x : 5 == a || 28922 == a ? v : oa;
    b = d * ((qd || c) * ({
        5: 3,
        6: 4,
        8: 2,
        29502: 3,
        29504: 4
    }[b - 6402] || 1) * a.BYTES_PER_ELEMENT + pd - 1 & -pd);
    return a.subarray(e >>> 31 - Math.clz32(a.BYTES_PER_ELEMENT), e + b >>> 31 - Math.clz32(a.BYTES_PER_ELEMENT))
}
, ze = [], Ae = [], Be = (a,b)=>{
    if (!Nd())
        return -1;
    a = S(a);
    return a ? a.requestFullscreen || a.webkitRequestFullscreen ? Gd() ? ke(a, b) : b.Ig ? (Ed(ke, 1, [a, b]),
    1) : -2 : -3 : -4
}
, Ce = ()=>{
    try {
        if (navigator.getGamepads)
            return (Pd = navigator.getGamepads()) ? 0 : -1
    } catch (a) {
        navigator.getGamepads = null
    }
    return -1
}
, De = (a,b)=>{
    var c = {
        target: S(2),
        cf: "beforeunload",
        jf: b,
        kf: (d=event)=>{
            var e = V(b, 28, 0, a);
            e &&= e ? B(q, e) : "";
            if (e)
                return d.preventDefault(),
                d.returnValue = e
        }
        ,
        hf: !0
    };
    return Ld(c)
}
, Ee = (a,b,c,d,e,f)=>{
    Qd ||= C(256);
    a = {
        target: S(a),
        cf: f,
        jf: d,
        kf: (g=event)=>{
            var l = g.target.id ? g.target.id : ""
              , n = Qd;
            F(Md(g.target), q, n + 0, 128);
            F(l, q, n + 128, 128);
            V(d, e, n, b) && g.preventDefault()
        }
        ,
        hf: c
    };
    return Ld(a)
}
, Fe = (a,b,c,d,e)=>{
    Sd ||= C(276);
    return Ld({
        target: a,
        cf: e,
        jf: d,
        kf: (f=event)=>{
            var g = Sd
              , l = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
              , n = !!l;
            m[g] = n;
            m[g + 1] = Nd();
            var p = n ? l : Rd
              , r = p?.id || "";
            F(Md(p), q, g + 2, 128);
            F(r, q, g + 130, 128);
            u[g + 260 >> 2] = p ? p.clientWidth : 0;
            u[g + 264 >> 2] = p ? p.clientHeight : 0;
            u[g + 268 >> 2] = screen.width;
            u[g + 272 >> 2] = screen.height;
            n && (Rd = l);
            V(d, 19, g, b) && f.preventDefault()
        }
        ,
        hf: c
    })
}
, Ge = (a,b,c,d,e)=>{
    Td ||= C(1240);
    b = {
        target: S(2),
        Gf: !0,
        cf: e,
        jf: c,
        kf: (f=event)=>{
            var g = Td;
            me(g, f.gamepad);
            V(c, d, g, a) && f.preventDefault()
        }
        ,
        hf: b
    };
    return Ld(b)
}
, He = (a,b,c,d,e,f)=>{
    Ud ||= C(160);
    a = {
        target: S(a),
        cf: f,
        jf: d,
        kf: g=>{
            var l = Ud;
            y[l >> 3] = g.timeStamp;
            var n = l >> 2;
            u[n + 2] = g.location;
            m[n + 12] = g.ctrlKey;
            m[n + 13] = g.shiftKey;
            m[n + 14] = g.altKey;
            m[n + 15] = g.metaKey;
            m[n + 16] = g.repeat;
            u[n + 5] = g.charCode;
            u[n + 6] = g.keyCode;
            u[n + 7] = g.which;
            F(g.key || "", q, l + 32, 32);
            F(g.code || "", q, l + 64, 32);
            F(g.char || "", q, l + 96, 32);
            F(g.locale || "", q, l + 128, 32);
            V(d, e, l, b) && g.preventDefault()
        }
        ,
        hf: c
    };
    return Ld(a)
}
, Ie = (a,b,c)=>{
    y[a >> 3] = b.timeStamp;
    a >>= 2;
    u[a + 2] = b.screenX;
    u[a + 3] = b.screenY;
    u[a + 4] = b.clientX;
    u[a + 5] = b.clientY;
    m[a + 24] = b.ctrlKey;
    m[a + 25] = b.shiftKey;
    m[a + 26] = b.altKey;
    m[a + 27] = b.metaKey;
    na[2 * a + 14] = b.button;
    na[2 * a + 15] = b.buttons;
    u[a + 8] = b.movementX;
    u[a + 9] = b.movementY;
    c = je(c);
    u[a + 10] = b.clientX - (c.left | 0);
    u[a + 11] = b.clientY - (c.top | 0)
}
, Je = (a,b,c,d,e,f)=>{
    Vd ||= C(64);
    a = S(a);
    return Ld({
        target: a,
        Gf: "mousemove" != f && "mouseenter" != f && "mouseleave" != f,
        cf: f,
        jf: d,
        kf: (g=event)=>{
            Ie(Vd, g, a);
            V(d, e, Vd, b) && g.preventDefault()
        }
        ,
        hf: c
    })
}
, Ke = (a,b,c,d,e)=>{
    Wd ||= C(257);
    return Ld({
        target: a,
        cf: e,
        jf: d,
        kf: (f=event)=>{
            var g = Wd
              , l = document.pointerLockElement || document.bf || document.yg || document.Tf;
            m[g] = !!l;
            var n = l?.id || "";
            F(Md(l), q, g + 1, 128);
            F(n, q, g + 129, 128);
            V(d, 20, g, b) && f.preventDefault()
        }
        ,
        hf: c
    })
}
, Le = (a,b,c,d)=>{
    Xd ||= C(36);
    a = S(a);
    return Ld({
        target: a,
        cf: "resize",
        jf: d,
        kf: (e=event)=>{
            if (e.target == a) {
                var f = document.body;
                if (f) {
                    var g = Xd;
                    u[g >> 2] = 0;
                    u[g + 4 >> 2] = f.clientWidth;
                    u[g + 8 >> 2] = f.clientHeight;
                    u[g + 12 >> 2] = innerWidth;
                    u[g + 16 >> 2] = innerHeight;
                    u[g + 20 >> 2] = outerWidth;
                    u[g + 24 >> 2] = outerHeight;
                    u[g + 28 >> 2] = pageXOffset | 0;
                    u[g + 32 >> 2] = pageYOffset | 0;
                    V(d, 10, g, b) && e.preventDefault()
                }
            }
        }
        ,
        hf: c
    })
}
, Me = (a,b,c,d,e,f)=>{
    Yd ||= C(1552);
    a = S(a);
    return Ld({
        target: a,
        Gf: "touchstart" == f || "touchend" == f,
        cf: f,
        jf: d,
        kf: g=>{
            for (var l, n = {}, p = g.touches, r = 0; r < p.length; ++r)
                l = p[r],
                l.lg = l.rg = 0,
                n[l.identifier] = l;
            for (r = 0; r < g.changedTouches.length; ++r)
                l = g.changedTouches[r],
                l.lg = 1,
                n[l.identifier] = l;
            for (r = 0; r < g.targetTouches.length; ++r)
                n[g.targetTouches[r].identifier].rg = 1;
            p = Yd;
            y[p >> 3] = g.timeStamp;
            var t = p >> 2;
            m[t + 12] = g.ctrlKey;
            m[t + 13] = g.shiftKey;
            m[t + 14] = g.altKey;
            m[t + 15] = g.metaKey;
            t += 4;
            var w = je(a)
              , D = 0;
            for (r in n)
                if (l = n[r],
                u[t] = l.identifier,
                u[t + 1] = l.screenX,
                u[t + 2] = l.screenY,
                u[t + 3] = l.clientX,
                u[t + 4] = l.clientY,
                u[t + 5] = l.pageX,
                u[t + 6] = l.pageY,
                m[t + 28] = l.lg,
                m[t + 29] = l.rg,
                u[t + 8] = l.clientX - (w.left | 0),
                u[t + 9] = l.clientY - (w.top | 0),
                t += 12,
                31 < ++D)
                    break;
            u[p + 8 >> 2] = D;
            V(d, e, p, b) && g.preventDefault()
        }
        ,
        hf: c
    })
}
, Ne = (a,b,c)=>{
    var d = be[1];
    Zd ||= C(8);
    return Ld({
        target: d,
        cf: "visibilitychange",
        jf: c,
        kf: (e=event)=>{
            var f = Zd
              , g = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
            m[f] = document.hidden;
            u[f + 4 >> 2] = g;
            V(c, 21, f, a) && e.preventDefault()
        }
        ,
        hf: b
    })
}
, Oe = (a,b,c,d)=>{
    $d ||= C(96);
    return Ld({
        target: a,
        Gf: !0,
        cf: "wheel",
        jf: d,
        kf: (e=event)=>{
            var f = $d;
            Ie(f, e, a);
            y[f + 64 >> 3] = e.deltaX;
            y[f + 72 >> 3] = e.deltaY;
            y[f + 80 >> 3] = e.deltaZ;
            u[f + 88 >> 2] = e.deltaMode;
            V(d, 9, f, b) && e.preventDefault()
        }
        ,
        hf: c
    })
}
, Pe = {}, Re = ()=>{
    if (!Qe) {
        var a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
            _: da || "./this.program"
        }, b;
        for (b in Pe)
            void 0 === Pe[b] ? delete a[b] : a[b] = Pe[b];
        var c = [];
        for (b in a)
            c.push(`${b}=${a[b]}`);
        Qe = c
    }
    return Qe
}
, Qe, Se = (a,b,c)=>{
    a.addEventListener(b, c, {
        once: !0
    })
}
, Ja = a=>{
    var b;
    b ||= [document, document.getElementById("canvas")];
    ["keydown", "mousedown", "touchstart"].forEach(c=>{
        b.forEach(d=>{
            d && Se(d, c, ()=>{
                "suspended" === a.state && a.resume()
            }
            )
        }
        )
    }
    )
}
, Ka = (a,b=[])=>{
    var c = "vi".replace(/p/g, "i");
    (0,
    h["dynCall_" + c])(a, ...b)
}
, Te = a=>{
    try {
        a()
    } catch (b) {
        za(b)
    }
}
;
function Ue() {
    var a = X
      , b = {};
    for (let[c,d] of Object.entries(a))
        b[c] = "function" == typeof d ? (...e)=>{
            Ve.push(c);
            try {
                return d(...e)
            } finally {
                la || (Ve.pop(),
                We && 1 === Xe && 0 === Ve.length && (Xe = 0,
                Te(Ye),
                "undefined" != typeof Fibers && Fibers.xh()))
            }
        }
        : d;
    return b
}
var Xe = 0
  , We = null
  , Ze = 0
  , Ve = []
  , $e = {}
  , af = {}
  , bf = 0
  , cf = null
  , df = [];
function ef() {
    var a = C(4108)
      , b = a + 12;
    v[a >> 2] = b;
    v[a + 4 >> 2] = b + 4096;
    b = Ve[0];
    var c = $e[b];
    void 0 === c && (c = bf++,
    $e[b] = c,
    af[c] = b);
    u[a + 8 >> 2] = c;
    return a
}
function ff(a) {
    if (!la) {
        if (0 === Xe) {
            var b = !1
              , c = !1;
            a((d=0)=>{
                if (!la && (Ze = d,
                b = !0,
                c)) {
                    Xe = 2;
                    Te(()=>gf(We));
                    "undefined" != typeof sb && lc && Hc();
                    d = !1;
                    try {
                        var e = (0,
                        X[af[u[We + 8 >> 2]]])()
                    } catch (l) {
                        e = l,
                        d = !0
                    }
                    var f = !1;
                    if (!We) {
                        var g = cf;
                        g && (cf = null,
                        (d ? g.reject : g.resolve)(e),
                        f = !0)
                    }
                    if (d && !f)
                        throw e;
                }
            }
            );
            c = !0;
            b || (Xe = 1,
            We = ef(),
            "undefined" != typeof sb && lc && Gc(),
            Te(()=>hf(We)))
        } else
            2 === Xe ? (Xe = 0,
            Te(jf),
            kf(We),
            We = null,
            df.forEach(zc)) : za(`invalid state: ${Xe}`);
        return Ze
    }
}
var Ia = 0
  , Ga = (a,b)=>{
    b = 1 == b ? ce(a.length) : C(a.length);
    a.subarray || a.slice || (a = new Uint8Array(a));
    q.set(a, b);
    return b
}
;
[44].forEach(a=>{
    ob[a] = new G(a);
    ob[a].stack = "<generic error, no stack>"
}
);
Cb = Array(4096);
Pb(H, "/");
L("/tmp");
L("/home");
L("/home/web_user");
(function() {
    L("/dev");
    hb(259, {
        read: ()=>0,
        write: (d,e,f,g)=>g
    });
    Rb("/dev/null", 259);
    gb(1280, jb);
    gb(1536, kb);
    Rb("/dev/tty", 1280);
    Rb("/dev/tty1", 1536);
    var a = new Uint8Array(1024)
      , b = 0
      , c = ()=>{
        0 === b && (b = $a(a).byteLength);
        return a[--b]
    }
    ;
    cc("/dev", "random", c);
    cc("/dev", "urandom", c);
    L("/dev/shm");
    L("/dev/shm/tmp")
}
)();
(function() {
    L("/proc");
    var a = L("/proc/self");
    L("/proc/self/fd");
    Pb({
        qf() {
            var b = nb(a, "fd", 16895, 73);
            b.be = {
                Af(c, d) {
                    var e = Mb(+d);
                    c = {
                        parent: null,
                        qf: {
                            pg: "fake"
                        },
                        be: {
                            Df: ()=>e.path
                        }
                    };
                    return c.parent = c
                }
            };
            return b
        }
    }, "/proc/self/fd")
}
)();
h.FS_createPath = ac;
h.FS_createDataFile = vb;
h.FS_createPreloadedFile = wb;
h.FS_unlink = Tb;
h.FS_createLazyFile = ec;
h.FS_createDevice = cc;
h.requestFullscreen = function(a, b) {
    function c() {
        Ic = !1;
        var f = d.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = Rc,
        Pc && d.requestPointerLock(),
        Ic = !0,
        Qc ? ("undefined" != typeof SDL && (u[SDL.screen >> 2] = v[SDL.screen >> 2] | 8388608),
        Vc(h.canvas),
        Uc()) : Vc(d)) : (f.parentNode.insertBefore(d, f),
        f.parentNode.removeChild(f),
        Qc ? ("undefined" != typeof SDL && (u[SDL.screen >> 2] = v[SDL.screen >> 2] & -8388609),
        Vc(h.canvas),
        Uc()) : Vc(d));
        h.onFullScreen?.(Ic);
        h.onFullscreen?.(Ic)
    }
    Pc = a;
    Qc = b;
    "undefined" == typeof Pc && (Pc = !0);
    "undefined" == typeof Qc && (Qc = !1);
    var d = h.canvas;
    Oc || (Oc = !0,
    document.addEventListener("fullscreenchange", c, !1),
    document.addEventListener("mozfullscreenchange", c, !1),
    document.addEventListener("webkitfullscreenchange", c, !1),
    document.addEventListener("MSFullscreenChange", c, !1));
    var e = document.createElement("div");
    d.parentNode.insertBefore(e, d);
    e.appendChild(d);
    e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? ()=>e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (e.webkitRequestFullScreen ? ()=>e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
    e.requestFullscreen()
}
;
h.requestAnimationFrame = rc;
h.setCanvasSize = function(a, b, c) {
    Vc(h.canvas, a, b);
    c || Uc()
}
;
h.pauseMainLoop = Gc;
h.resumeMainLoop = Hc;
h.getUserMedia = function(a) {
    let b;
    (b = window).getUserMedia || (b.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
    window.getUserMedia(a)
}
;
h.createContext = function(a, b, c, d) {
    if (b && h.lf && a == h.canvas)
        return h.lf;
    var e;
    if (b) {
        var f = {
            antialias: !1,
            alpha: !1,
            og: 1
        };
        if (d)
            for (var g in d)
                f[g] = d[g];
        if ("undefined" != typeof yd && (e = ud(a, f)))
            var l = md[e].sf
    } else
        l = a.getContext("2d");
    if (!l)
        return null;
    c && (h.lf = l,
    b && xd(e),
    h.$g = b,
    Kc.forEach(n=>n()),
    tb());
    return l
}
;
for (var Nc = {}, Q, Y = 0; 32 > Y; ++Y)
    oe.push(Array(Y));
var of = new Float32Array(288);
for (Y = 0; 288 >= Y; ++Y)
    ze[Y] = of.subarray(0, Y);
var pf = new Int32Array(288);
for (Y = 0; 288 >= Y; ++Y)
    Ae[Y] = pf.subarray(0, Y);
var Ef = {
    a: (a,b,c)=>{
        var d = new Qa(a);
        v[d.Of + 16 >> 2] = 0;
        v[d.Of + 4 >> 2] = b;
        v[d.Of + 8 >> 2] = c;
        Ra = a;
        Sa++;
        throw Ra;
    }
    ,
    V: function(a, b, c) {
        Ua = c;
        try {
            var d = Mb(a);
            switch (b) {
            case 0:
                var e = Ta();
                if (0 > e)
                    break;
                for (; Ab[e]; )
                    e++;
                return Ob(d, e).fd;
            case 1:
            case 2:
                return 0;
            case 3:
                return d.flags;
            case 4:
                return e = Ta(),
                d.flags |= e,
                0;
            case 12:
                return e = Ta(),
                na[e + 0 >> 1] = 2,
                0;
            case 13:
            case 14:
                return 0
            }
            return -28
        } catch (f) {
            if ("undefined" == typeof fc || "ErrnoError" !== f.name)
                throw f;
            return -f.ff
        }
    },
    gb: function(a, b, c) {
        try {
            var d = Mb(a);
            if (!d.uf) {
                var e = K(d.path, {
                    zf: !0
                }).node;
                if (!e.be.Pf)
                    throw new G(54);
                var f = e.be.Pf(e);
                d.uf = f
            }
            a = 0;
            for (var g = Yb(d, 0, 1), l = Math.floor(g / 280); l < d.uf.length && a + 280 <= c; ) {
                var n = d.uf[l];
                if ("." === n) {
                    var p = d.node.id;
                    var r = 4
                } else if (".." === n)
                    p = K(d.path, {
                        parent: !0
                    }).node.id,
                    r = 4;
                else {
                    var t = pb(d.node, n);
                    p = t.id;
                    r = 8192 === (t.mode & 61440) ? 2 : J(t.mode) ? 4 : 40960 === (t.mode & 61440) ? 10 : 8
                }
                A = [p >>> 0, (z = p,
                1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
                u[b + a >> 2] = A[0];
                u[b + a + 4 >> 2] = A[1];
                A = [280 * (l + 1) >>> 0, (z = 280 * (l + 1),
                1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
                u[b + a + 8 >> 2] = A[0];
                u[b + a + 12 >> 2] = A[1];
                na[b + a + 16 >> 1] = 280;
                m[b + a + 18] = r;
                F(n, q, b + a + 19, 256);
                a += 280;
                l += 1
            }
            Yb(d, 280 * l, 0);
            return a
        } catch (w) {
            if ("undefined" == typeof fc || "ErrnoError" !== w.name)
                throw w;
            return -w.ff
        }
    },
    pb: function(a, b, c) {
        Ua = c;
        try {
            var d = Mb(a);
            switch (b) {
            case 21509:
                return d.Ze ? 0 : -59;
            case 21505:
                if (!d.Ze)
                    return -59;
                if (d.Ze.rf.Rg) {
                    a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    var e = Ta();
                    u[e >> 2] = 25856;
                    u[e + 4 >> 2] = 5;
                    u[e + 8 >> 2] = 191;
                    u[e + 12 >> 2] = 35387;
                    for (var f = 0; 32 > f; f++)
                        m[e + f + 17] = a[f] || 0
                }
                return 0;
            case 21510:
            case 21511:
            case 21512:
                return d.Ze ? 0 : -59;
            case 21506:
            case 21507:
            case 21508:
                if (!d.Ze)
                    return -59;
                if (d.Ze.rf.Sg)
                    for (e = Ta(),
                    a = [],
                    f = 0; 32 > f; f++)
                        a.push(m[e + f + 17]);
                return 0;
            case 21519:
                if (!d.Ze)
                    return -59;
                e = Ta();
                return u[e >> 2] = 0;
            case 21520:
                return d.Ze ? -28 : -59;
            case 21531:
                e = Ta();
                if (!d.Ye.Qg)
                    throw new G(59);
                return d.Ye.Qg(d, b, e);
            case 21523:
                if (!d.Ze)
                    return -59;
                d.Ze.rf.Tg && (f = [24, 80],
                e = Ta(),
                na[e >> 1] = f[0],
                na[e + 2 >> 1] = f[1]);
                return 0;
            case 21524:
                return d.Ze ? 0 : -59;
            case 21515:
                return d.Ze ? 0 : -59;
            default:
                return -28
            }
        } catch (g) {
            if ("undefined" == typeof fc || "ErrnoError" !== g.name)
                throw g;
            return -g.ff
        }
    },
    jb: function(a, b, c) {
        try {
            return b = b ? B(q, b) : "",
            b = gc(a, b),
            b = Wa(b),
            "/" === b[b.length - 1] && (b = b.substr(0, b.length - 1)),
            L(b, c),
            0
        } catch (d) {
            if ("undefined" == typeof fc || "ErrnoError" !== d.name)
                throw d;
            return -d.ff
        }
    },
    W: function(a, b, c, d) {
        Ua = d;
        try {
            b = b ? B(q, b) : "";
            b = gc(a, b);
            var e = d ? Ta() : 0;
            return Vb(b, c, e).fd
        } catch (f) {
            if ("undefined" == typeof fc || "ErrnoError" !== f.name)
                throw f;
            return -f.ff
        }
    },
    fb: function(a, b) {
        try {
            a = a ? B(q, a) : "";
            var c = K(a, {
                zf: !0
            }).node;
            if (!c)
                throw new G(44);
            if (!c.be.mf)
                throw new G(63);
            var d = c.be.mf(c);
            u[b >> 2] = d.Jg;
            u[b + 4 >> 2] = d.mode;
            v[b + 8 >> 2] = d.Xg;
            u[b + 12 >> 2] = d.uid;
            u[b + 16 >> 2] = d.Mg;
            u[b + 20 >> 2] = d.Cf;
            A = [d.size >>> 0, (z = d.size,
            1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
            u[b + 24 >> 2] = A[0];
            u[b + 28 >> 2] = A[1];
            u[b + 32 >> 2] = 4096;
            u[b + 36 >> 2] = d.Bg;
            var e = d.zg.getTime()
              , f = d.Wg.getTime()
              , g = d.Cg.getTime();
            A = [Math.floor(e / 1E3) >>> 0, (z = Math.floor(e / 1E3),
            1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
            u[b + 40 >> 2] = A[0];
            u[b + 44 >> 2] = A[1];
            v[b + 48 >> 2] = e % 1E3 * 1E3;
            A = [Math.floor(f / 1E3) >>> 0, (z = Math.floor(f / 1E3),
            1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
            u[b + 56 >> 2] = A[0];
            u[b + 60 >> 2] = A[1];
            v[b + 64 >> 2] = f % 1E3 * 1E3;
            A = [Math.floor(g / 1E3) >>> 0, (z = Math.floor(g / 1E3),
            1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
            u[b + 72 >> 2] = A[0];
            u[b + 76 >> 2] = A[1];
            v[b + 80 >> 2] = g % 1E3 * 1E3;
            A = [d.kg >>> 0, (z = d.kg,
            1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
            u[b + 88 >> 2] = A[0];
            u[b + 92 >> 2] = A[1];
            return 0
        } catch (l) {
            if ("undefined" == typeof fc || "ErrnoError" !== l.name)
                throw l;
            return -l.ff
        }
    },
    tb: ()=>{
        za("")
    }
    ,
    sb: ()=>1,
    rb: (a,b,c)=>q.copyWithin(a, b, b + c),
    db: ()=>{
        throw Infinity;
    }
    ,
    Za: function(a, b, c) {
        a = new Date(1E3 * (b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN));
        u[c >> 2] = a.getUTCSeconds();
        u[c + 4 >> 2] = a.getUTCMinutes();
        u[c + 8 >> 2] = a.getUTCHours();
        u[c + 12 >> 2] = a.getUTCDate();
        u[c + 16 >> 2] = a.getUTCMonth();
        u[c + 20 >> 2] = a.getUTCFullYear() - 1900;
        u[c + 24 >> 2] = a.getUTCDay();
        u[c + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0
    },
    _a: function(a, b, c) {
        a = new Date(1E3 * (b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN));
        u[c >> 2] = a.getSeconds();
        u[c + 4 >> 2] = a.getMinutes();
        u[c + 8 >> 2] = a.getHours();
        u[c + 12 >> 2] = a.getDate();
        u[c + 16 >> 2] = a.getMonth();
        u[c + 20 >> 2] = a.getFullYear() - 1900;
        u[c + 24 >> 2] = a.getDay();
        b = a.getFullYear();
        u[c + 28 >> 2] = (0 !== b % 4 || 0 === b % 100 && 0 !== b % 400 ? ic : hc)[a.getMonth()] + a.getDate() - 1 | 0;
        u[c + 36 >> 2] = -(60 * a.getTimezoneOffset());
        b = (new Date(a.getFullYear(),6,1)).getTimezoneOffset();
        var d = (new Date(a.getFullYear(),0,1)).getTimezoneOffset();
        u[c + 32 >> 2] = (b != d && a.getTimezoneOffset() == Math.min(d, b)) | 0
    },
    ib: (a,b,c,d)=>{
        var e = (new Date).getFullYear()
          , f = new Date(e,0,1)
          , g = new Date(e,6,1);
        e = f.getTimezoneOffset();
        var l = g.getTimezoneOffset();
        v[a >> 2] = 60 * Math.max(e, l);
        u[b >> 2] = Number(e != l);
        a = n=>n.toLocaleTimeString(void 0, {
            hour12: !1,
            timeZoneName: "short"
        }).split(" ")[1];
        f = a(f);
        g = a(g);
        l < e ? (F(f, q, c, 17),
        F(g, q, d, 17)) : (F(f, q, d, 17),
        F(g, q, c, 17))
    }
    ,
    Ra: a=>{
        if (12448 == a)
            return M = 12288,
            1;
        M = 12300;
        return 0
    }
    ,
    ec: (a,b,c,d,e)=>{
        if (62E3 != a)
            M = 12296,
            c = 0;
        else {
            if (b)
                for (; ; ) {
                    a = u[b >> 2];
                    if (12321 == a)
                        N.alpha = 0 < u[b + 4 >> 2];
                    else if (12325 == a)
                        N.depth = 0 < u[b + 4 >> 2];
                    else if (12326 == a)
                        N.stencil = 0 < u[b + 4 >> 2];
                    else if (12337 == a)
                        a = u[b + 4 >> 2],
                        N.antialias = 0 < a;
                    else if (12338 == a)
                        a = u[b + 4 >> 2],
                        N.antialias = 1 == a;
                    else if (12544 == a)
                        N.qh = 12547 != u[b + 4 >> 2];
                    else if (12344 == a)
                        break;
                    b += 8
                }
            c && d || e ? (e && (u[e >> 2] = 1),
            c && 0 < d && (v[c >> 2] = 62002),
            M = 12288,
            c = 1) : (M = 12300,
            c = 0)
        }
        return c
    }
    ,
    Jb: (a,b,c,d)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        for (a = 1; ; ) {
            b = u[d >> 2];
            if (12440 == b)
                a = u[d + 4 >> 2];
            else if (12344 == b)
                break;
            else
                return M = 12292,
                0;
            d += 8
        }
        if (2 != a)
            return M = 12293,
            0;
        N.og = a - 1;
        N.rh = 0;
        ad = ud(h.canvas, N);
        if (0 != ad)
            return M = 12288,
            xd(ad),
            h.$g = !0,
            Kc.forEach(function(e) {
                e()
            }),
            xd(null),
            62004;
        M = 12297;
        return 0
    }
    ,
    qb: (a,b)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        if (62002 != b)
            return M = 12293,
            0;
        M = 12288;
        return 62006
    }
    ,
    yb: (a,b)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        if (62004 != b)
            return M = 12294,
            0;
        a = ad;
        wd === md[a] && (wd = null);
        if ("object" == typeof Od)
            for (var c = md[a].sf.canvas, d = 0; d < Jd.length; ++d)
                Jd[d].target != c || Kd(d--);
        md[a] && md[a].sf.canvas && (md[a].sf.canvas.yf = void 0);
        md[a] = null;
        M = 12288;
        Xc == b && (Xc = 0);
        return 1
    }
    ,
    hb: (a,b)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        if (62006 != b)
            return M = 12301,
            1;
        Yc == b && (Yc = 0);
        Zc == b && (Zc = 0);
        M = 12288;
        return 1
    }
    ,
    Ub: (a,b,c,d)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        if (62002 != b)
            return M = 12293,
            0;
        if (!d)
            return M = 12300,
            0;
        M = 12288;
        switch (c) {
        case 12320:
            return u[d >> 2] = N.alpha ? 32 : 24,
            1;
        case 12321:
            return u[d >> 2] = N.alpha ? 8 : 0,
            1;
        case 12322:
            return u[d >> 2] = 8,
            1;
        case 12323:
            return u[d >> 2] = 8,
            1;
        case 12324:
            return u[d >> 2] = 8,
            1;
        case 12325:
            return u[d >> 2] = N.depth ? 24 : 0,
            1;
        case 12326:
            return u[d >> 2] = N.stencil ? 8 : 0,
            1;
        case 12327:
            return u[d >> 2] = 12344,
            1;
        case 12328:
            return u[d >> 2] = 62002,
            1;
        case 12329:
            return u[d >> 2] = 0,
            1;
        case 12330:
            return u[d >> 2] = 4096,
            1;
        case 12331:
            return u[d >> 2] = 16777216,
            1;
        case 12332:
            return u[d >> 2] = 4096,
            1;
        case 12333:
            return u[d >> 2] = 0,
            1;
        case 12334:
            return u[d >> 2] = 0,
            1;
        case 12335:
            return u[d >> 2] = 12344,
            1;
        case 12337:
            return u[d >> 2] = N.antialias ? 4 : 0,
            1;
        case 12338:
            return u[d >> 2] = N.antialias ? 1 : 0,
            1;
        case 12339:
            return u[d >> 2] = 4,
            1;
        case 12340:
            return u[d >> 2] = 12344,
            1;
        case 12341:
        case 12342:
        case 12343:
            return u[d >> 2] = -1,
            1;
        case 12345:
        case 12346:
            return u[d >> 2] = 0,
            1;
        case 12347:
            return u[d >> 2] = 0,
            1;
        case 12348:
            return u[d >> 2] = 1;
        case 12349:
        case 12350:
            return u[d >> 2] = 0,
            1;
        case 12351:
            return u[d >> 2] = 12430,
            1;
        case 12352:
            return u[d >> 2] = 4,
            1;
        case 12354:
            return u[d >> 2] = 0,
            1;
        default:
            return M = 12292,
            0
        }
    }
    ,
    X: a=>{
        M = 12288;
        return 0 != a && 1 != a ? 0 : 62E3
    }
    ,
    Pa: ()=>M,
    Ac: (a,b,c)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        b && (u[b >> 2] = 1);
        c && (u[c >> 2] = 4);
        Wc = !0;
        M = 12288;
        return 1
    }
    ,
    cb: (a,b,c,d)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        if (0 != d && 62004 != d)
            return M = 12294,
            0;
        if (0 != c && 62006 != c || 0 != b && 62006 != b)
            return M = 12301,
            0;
        xd(d ? ad : null);
        Xc = d;
        Zc = b;
        Yc = c;
        M = 12288;
        return 1
    }
    ,
    Qa: (a,b)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        M = 12288;
        if ($c[b])
            return $c[b];
        switch (b) {
        case 12371:
            a = zd("Emscripten");
            break;
        case 12372:
            a = zd("1.4 Emscripten EGL");
            break;
        case 12373:
            a = zd("");
            break;
        case 12429:
            a = zd("OpenGL_ES");
            break;
        default:
            return M = 12300,
            0
        }
        return $c[b] = a
    }
    ,
    Wa: ()=>{
        if (Wc)
            if (h.lf)
                if (h.lf.isContextLost())
                    M = 12302;
                else
                    return M = 12288,
                    1;
            else
                M = 12290;
        else
            M = 12289;
        return 0
    }
    ,
    Va: (a,b)=>{
        if (62E3 != a)
            return M = 12296,
            0;
        0 == b ? tc(0, 0) : tc(1, b);
        M = 12288;
        return 1
    }
    ,
    pc: a=>{
        if (62E3 != a)
            return M = 12296,
            0;
        Zc = Yc = Xc = 0;
        Wc = !1;
        M = 12288;
        return 1
    }
    ,
    Ta: ()=>{
        M = 12288;
        return 1
    }
    ,
    Ua: ()=>{
        M = 12288;
        return 1
    }
    ,
    x: (a,b,c)=>{
        b = Bd(b, c);
        return Ma[a](...b)
    }
    ,
    c: (a,b,c)=>{
        b = Bd(b, c);
        return Ma[a](...b)
    }
    ,
    y: (a,b,c)=>{
        b = Bd(b, c);
        return Ma[a](...b)
    }
    ,
    Ma: ()=>{
        Gc();
        lc = null
    }
    ,
    t: ()=>Date.now(),
    Ia: ()=>{
        if (!Nd())
            return -1;
        Fd(ke);
        var a = be[1];
        if (a.exitFullscreen)
            a.fullscreenElement && a.exitFullscreen();
        else if (a.webkitExitFullscreen)
            a.webkitFullscreenElement && a.webkitExitFullscreen();
        else
            return -1;
        return 0
    }
    ,
    Na: ()=>{
        Fd(le);
        if (document.exitPointerLock)
            document.exitPointerLock();
        else
            return -1;
        return 0
    }
    ,
    La: a=>{
        Pa = !1;
        Cc = 0;
        ma = a;
        Dc(a)
    }
    ,
    j: ()=>devicePixelRatio,
    e: (a,b,c)=>{
        a = S(a);
        if (!a)
            return -4;
        a = je(a);
        y[b >> 3] = a.width;
        y[c >> 3] = a.height;
        return 0
    }
    ,
    Y: (a,b)=>{
        if (0 > a || a >= Pd.length)
            return -5;
        if (!Pd[a])
            return -7;
        me(b, Pd[a]);
        return 0
    }
    ,
    s: pc,
    Rd: ()=>Pd.length,
    Vb: (a,b,c)=>ne(a ? B(q, a) : "", b, c),
    Sa: (a,b,c)=>{
        a = qf(a);
        return (a = Ab[a]) ? ne(a.path, b, c) : 0
    }
    ,
    Oa: (a,b)=>{
        u[a >> 2] = screen.width;
        u[b >> 2] = screen.height
    }
    ,
    oa: a=>Q.activeTexture(a),
    na: (a,b)=>{
        Q.attachShader(O[a], P[b])
    }
    ,
    Ea: (a,b)=>{
        Q.pf.beginQueryEXT(a, nd[b])
    }
    ,
    ma: (a,b,c)=>{
        Q.bindAttribLocation(O[a], b, c ? B(q, c) : "")
    }
    ,
    la: (a,b)=>{
        Q.bindBuffer(a, gd[b])
    }
    ,
    ka: (a,b)=>{
        Q.bindFramebuffer(a, hd[b])
    }
    ,
    ja: (a,b)=>{
        Q.bindRenderbuffer(a, jd[b])
    }
    ,
    ia: (a,b)=>{
        Q.bindTexture(a, kd[b])
    }
    ,
    wa: a=>{
        Q.bindVertexArray(ld[a])
    }
    ,
    ha: (a,b,c,d)=>Q.blendColor(a, b, c, d),
    ga: a=>Q.blendEquation(a),
    fa: (a,b)=>Q.blendEquationSeparate(a, b),
    ea: (a,b)=>Q.blendFunc(a, b),
    da: (a,b,c,d)=>Q.blendFuncSeparate(a, b, c, d),
    ca: (a,b,c,d)=>{
        Q.bufferData(a, c ? q.subarray(c, c + b) : b, d)
    }
    ,
    ba: (a,b,c,d)=>{
        Q.bufferSubData(a, b, q.subarray(d, d + c))
    }
    ,
    aa: a=>Q.checkFramebufferStatus(a),
    $: a=>Q.clear(a),
    _: (a,b,c,d)=>Q.clearColor(a, b, c, d),
    Z: a=>Q.clearDepth(a),
    Qd: a=>Q.clearStencil(a),
    Pd: (a,b,c,d)=>{
        Q.colorMask(!!a, !!b, !!c, !!d)
    }
    ,
    Od: a=>{
        Q.compileShader(P[a])
    }
    ,
    Nd: (a,b,c,d,e,f,g,l)=>{
        Q.compressedTexImage2D(a, b, c, d, e, f, l ? q.subarray(l, l + g) : null)
    }
    ,
    Md: (a,b,c,d,e,f,g,l,n)=>{
        Q.compressedTexSubImage2D(a, b, c, d, e, f, g, n ? q.subarray(n, n + l) : null)
    }
    ,
    Ld: (a,b,c,d,e,f,g,l)=>Q.copyTexImage2D(a, b, c, d, e, f, g, l),
    Kd: (a,b,c,d,e,f,g,l)=>Q.copyTexSubImage2D(a, b, c, d, e, f, g, l),
    Jd: ()=>{
        var a = rd(O)
          , b = Q.createProgram();
        b.name = a;
        b.Lf = b.Jf = b.Kf = 0;
        b.bg = 1;
        O[a] = b;
        return a
    }
    ,
    Id: a=>{
        var b = rd(P);
        P[b] = Q.createShader(a);
        return b
    }
    ,
    Hd: a=>Q.cullFace(a),
    Gd: (a,b)=>{
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2]
              , e = gd[d];
            e && (Q.deleteBuffer(e),
            e.name = 0,
            gd[d] = null)
        }
    }
    ,
    Fd: (a,b)=>{
        for (var c = 0; c < a; ++c) {
            var d = u[b + 4 * c >> 2]
              , e = hd[d];
            e && (Q.deleteFramebuffer(e),
            e.name = 0,
            hd[d] = null)
        }
    }
    ,
    Ed: a=>{
        if (a) {
            var b = O[a];
            b ? (Q.deleteProgram(b),
            b.name = 0,
            O[a] = null) : R ||= 1281
        }
    }
    ,
    Ga: (a,b)=>{
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2]
              , e = nd[d];
            e && (Q.pf.deleteQueryEXT(e),
            nd[d] = null)
        }
    }
    ,
    Dd: (a,b)=>{
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2]
              , e = jd[d];
            e && (Q.deleteRenderbuffer(e),
            e.name = 0,
            jd[d] = null)
        }
    }
    ,
    Cd: a=>{
        if (a) {
            var b = P[a];
            b ? (Q.deleteShader(b),
            P[a] = null) : R ||= 1281
        }
    }
    ,
    Bd: (a,b)=>{
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2]
              , e = kd[d];
            e && (Q.deleteTexture(e),
            e.name = 0,
            kd[d] = null)
        }
    }
    ,
    va: (a,b)=>{
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2];
            Q.deleteVertexArray(ld[d]);
            ld[d] = null
        }
    }
    ,
    Ad: a=>Q.depthFunc(a),
    zd: a=>{
        Q.depthMask(!!a)
    }
    ,
    yd: (a,b)=>Q.depthRange(a, b),
    xd: (a,b)=>{
        Q.detachShader(O[a], P[b])
    }
    ,
    wd: a=>Q.disable(a),
    vd: a=>{
        Q.disableVertexAttribArray(a)
    }
    ,
    ud: (a,b,c)=>{
        Q.drawArrays(a, b, c)
    }
    ,
    ra: (a,b,c,d)=>{
        Q.drawArraysInstanced(a, b, c, d)
    }
    ,
    sa: (a,b)=>{
        for (var c = oe[a], d = 0; d < a; d++)
            c[d] = u[b + 4 * d >> 2];
        Q.drawBuffers(c)
    }
    ,
    td: (a,b,c,d)=>{
        Q.drawElements(a, b, c, d)
    }
    ,
    qa: (a,b,c,d,e)=>{
        Q.drawElementsInstanced(a, b, c, d, e)
    }
    ,
    sd: a=>Q.enable(a),
    rd: a=>{
        Q.enableVertexAttribArray(a)
    }
    ,
    Da: a=>{
        Q.pf.endQueryEXT(a)
    }
    ,
    qd: ()=>Q.finish(),
    pd: ()=>Q.flush(),
    od: (a,b,c,d)=>{
        Q.framebufferRenderbuffer(a, b, c, jd[d])
    }
    ,
    nd: (a,b,c,d,e)=>{
        Q.framebufferTexture2D(a, b, c, kd[d], e)
    }
    ,
    md: a=>Q.frontFace(a),
    ld: (a,b)=>{
        sd(a, b, "createBuffer", gd)
    }
    ,
    jd: (a,b)=>{
        sd(a, b, "createFramebuffer", hd)
    }
    ,
    Ha: (a,b)=>{
        for (var c = 0; c < a; c++) {
            var d = Q.pf.createQueryEXT();
            if (!d) {
                for (R ||= 1282; c < a; )
                    u[b + 4 * c++ >> 2] = 0;
                break
            }
            var e = rd(nd);
            d.name = e;
            nd[e] = d;
            u[b + 4 * c >> 2] = e
        }
    }
    ,
    id: (a,b)=>{
        sd(a, b, "createRenderbuffer", jd)
    }
    ,
    hd: (a,b)=>{
        sd(a, b, "createTexture", kd)
    }
    ,
    ua: (a,b)=>{
        sd(a, b, "createVertexArray", ld)
    }
    ,
    kd: a=>Q.generateMipmap(a),
    gd: (a,b,c,d,e,f,g)=>{
        pe("getActiveAttrib", a, b, c, d, e, f, g)
    }
    ,
    fd: (a,b,c,d,e,f,g)=>{
        pe("getActiveUniform", a, b, c, d, e, f, g)
    }
    ,
    ed: (a,b,c,d)=>{
        a = Q.getAttachedShaders(O[a]);
        var e = a.length;
        e > b && (e = b);
        u[c >> 2] = e;
        for (b = 0; b < e; ++b)
            u[d + 4 * b >> 2] = P.indexOf(a[b])
    }
    ,
    dd: (a,b)=>Q.getAttribLocation(O[a], b ? B(q, b) : ""),
    cd: (a,b)=>qe(a, b, 4),
    bd: (a,b,c)=>{
        c ? u[c >> 2] = Q.getBufferParameter(a, b) : R ||= 1281
    }
    ,
    ad: ()=>{
        var a = Q.getError() || R;
        R = 0;
        return a
    }
    ,
    $c: (a,b)=>qe(a, b, 2),
    _c: (a,b,c,d)=>{
        a = Q.getFramebufferAttachmentParameter(a, b, c);
        if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture)
            a = a.name | 0;
        u[d >> 2] = a
    }
    ,
    Zc: (a,b)=>qe(a, b, 0),
    Xc: (a,b,c,d)=>{
        a = Q.getProgramInfoLog(O[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? F(a, q, d, b) : 0;
        c && (u[c >> 2] = b)
    }
    ,
    Yc: (a,b,c)=>{
        if (c)
            if (a >= fd)
                R ||= 1281;
            else if (a = O[a],
            35716 == b)
                a = Q.getProgramInfoLog(a),
                null === a && (a = "(unknown error)"),
                u[c >> 2] = a.length + 1;
            else if (35719 == b) {
                if (!a.Lf)
                    for (b = 0; b < Q.getProgramParameter(a, 35718); ++b)
                        a.Lf = Math.max(a.Lf, Q.getActiveUniform(a, b).name.length + 1);
                u[c >> 2] = a.Lf
            } else if (35722 == b) {
                if (!a.Jf)
                    for (b = 0; b < Q.getProgramParameter(a, 35721); ++b)
                        a.Jf = Math.max(a.Jf, Q.getActiveAttrib(a, b).name.length + 1);
                u[c >> 2] = a.Jf
            } else if (35381 == b) {
                if (!a.Kf)
                    for (b = 0; b < Q.getProgramParameter(a, 35382); ++b)
                        a.Kf = Math.max(a.Kf, Q.getActiveUniformBlockName(a, b).length + 1);
                u[c >> 2] = a.Kf
            } else
                u[c >> 2] = Q.getProgramParameter(a, b);
        else
            R ||= 1281
    }
    ,
    ya: re,
    Aa: se,
    xa: re,
    za: se,
    Ba: (a,b,c)=>{
        c ? u[c >> 2] = Q.pf.getQueryEXT(a, b) : R ||= 1281
    }
    ,
    Wc: (a,b,c)=>{
        c ? u[c >> 2] = Q.getRenderbufferParameter(a, b) : R ||= 1281
    }
    ,
    Uc: (a,b,c,d)=>{
        a = Q.getShaderInfoLog(P[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? F(a, q, d, b) : 0;
        c && (u[c >> 2] = b)
    }
    ,
    Tc: (a,b,c,d)=>{
        a = Q.getShaderPrecisionFormat(a, b);
        u[c >> 2] = a.rangeMin;
        u[c + 4 >> 2] = a.rangeMax;
        u[d >> 2] = a.precision
    }
    ,
    Sc: (a,b,c,d)=>{
        if (a = Q.getShaderSource(P[a]))
            b = 0 < b && d ? F(a, q, d, b) : 0,
            c && (u[c >> 2] = b)
    }
    ,
    Vc: (a,b,c)=>{
        c ? 35716 == b ? (a = Q.getShaderInfoLog(P[a]),
        null === a && (a = "(unknown error)"),
        u[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = Q.getShaderSource(P[a]),
        u[c >> 2] = a ? a.length + 1 : 0) : u[c >> 2] = Q.getShaderParameter(P[a], b) : R ||= 1281
    }
    ,
    Rc: a=>{
        var b = od[a];
        if (!b) {
            switch (a) {
            case 7939:
                b = zd(te().join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                (b = Q.getParameter(a)) || (R ||= 1280);
                b = b ? zd(b) : 0;
                break;
            case 7938:
                b = zd(`OpenGL ES 2.0 (${Q.getParameter(7938)})`);
                break;
            case 35724:
                b = Q.getParameter(35724);
                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== c && (3 == c[1].length && (c[1] += "0"),
                b = `OpenGL ES GLSL ES ${c[1]} (${b})`);
                b = zd(b);
                break;
            default:
                R ||= 1280
            }
            od[a] = b
        }
        return b
    }
    ,
    Qc: (a,b,c)=>{
        c ? x[c >> 2] = Q.getTexParameter(a, b) : R ||= 1281
    }
    ,
    Pc: (a,b,c)=>{
        c ? u[c >> 2] = Q.getTexParameter(a, b) : R ||= 1281
    }
    ,
    Mc: (a,b)=>{
        b = b ? B(q, b) : "";
        if (a = O[a]) {
            ve(a);
            var c = a.Ff
              , d = 0
              , e = b
              , f = ue(b);
            0 < f && (d = parseInt(b.slice(f + 1)) >>> 0,
            e = b.slice(0, f));
            if ((e = a.xg[e]) && d < e[0] && (d += e[1],
            c[d] = c[d] || Q.getUniformLocation(a, b)))
                return d
        } else
            R ||= 1281;
        return -1
    }
    ,
    Oc: (a,b,c)=>{
        we(a, b, c, 2)
    }
    ,
    Nc: (a,b,c)=>{
        we(a, b, c, 0)
    }
    ,
    Jc: (a,b,c)=>{
        c ? u[c >> 2] = Q.getVertexAttribOffset(a, b) : R ||= 1281
    }
    ,
    Lc: (a,b,c)=>{
        xe(a, b, c, 2)
    }
    ,
    Kc: (a,b,c)=>{
        xe(a, b, c, 5)
    }
    ,
    Ic: (a,b)=>Q.hint(a, b),
    Hc: a=>(a = gd[a]) ? Q.isBuffer(a) : 0,
    Gc: a=>Q.isEnabled(a),
    Fc: a=>(a = hd[a]) ? Q.isFramebuffer(a) : 0,
    Ec: a=>(a = O[a]) ? Q.isProgram(a) : 0,
    Fa: a=>(a = nd[a]) ? Q.pf.isQueryEXT(a) : 0,
    Dc: a=>(a = jd[a]) ? Q.isRenderbuffer(a) : 0,
    Cc: a=>(a = P[a]) ? Q.isShader(a) : 0,
    Bc: a=>(a = kd[a]) ? Q.isTexture(a) : 0,
    ta: a=>(a = ld[a]) ? Q.isVertexArray(a) : 0,
    zc: a=>Q.lineWidth(a),
    yc: a=>{
        a = O[a];
        Q.linkProgram(a);
        a.Ff = 0;
        a.xg = {}
    }
    ,
    xc: (a,b)=>{
        3317 == a ? pd = b : 3314 == a && (qd = b);
        Q.pixelStorei(a, b)
    }
    ,
    wc: (a,b)=>Q.polygonOffset(a, b),
    Ca: (a,b)=>{
        Q.pf.queryCounterEXT(nd[a], b)
    }
    ,
    vc: (a,b,c,d,e,f,g)=>{
        (g = ye(f, e, c, d, g)) ? Q.readPixels(a, b, c, d, e, f, g) : R ||= 1280
    }
    ,
    uc: ()=>{}
    ,
    tc: (a,b,c,d)=>Q.renderbufferStorage(a, b, c, d),
    sc: (a,b)=>{
        Q.sampleCoverage(a, !!b)
    }
    ,
    rc: (a,b,c,d)=>Q.scissor(a, b, c, d),
    qc: ()=>{
        R ||= 1280
    }
    ,
    oc: (a,b,c,d)=>{
        for (var e = "", f = 0; f < b; ++f) {
            var g = (g = v[c + 4 * f >> 2]) ? B(q, g, d ? v[d + 4 * f >> 2] : void 0) : "";
            e += g
        }
        Q.shaderSource(P[a], e)
    }
    ,
    nc: (a,b,c)=>Q.stencilFunc(a, b, c),
    mc: (a,b,c,d)=>Q.stencilFuncSeparate(a, b, c, d),
    lc: a=>Q.stencilMask(a),
    kc: (a,b)=>Q.stencilMaskSeparate(a, b),
    jc: (a,b,c)=>Q.stencilOp(a, b, c),
    ic: (a,b,c,d)=>Q.stencilOpSeparate(a, b, c, d),
    hc: (a,b,c,d,e,f,g,l,n)=>{
        n = n ? ye(l, g, d, e, n) : null;
        Q.texImage2D(a, b, c, d, e, f, g, l, n)
    }
    ,
    gc: (a,b,c)=>Q.texParameterf(a, b, c),
    fc: (a,b,c)=>{
        Q.texParameterf(a, b, x[c >> 2])
    }
    ,
    dc: (a,b,c)=>Q.texParameteri(a, b, c),
    cc: (a,b,c)=>{
        Q.texParameteri(a, b, u[c >> 2])
    }
    ,
    bc: (a,b,c,d,e,f,g,l,n)=>{
        n = n ? ye(l, g, e, f, n) : null;
        Q.texSubImage2D(a, b, c, d, e, f, g, l, n)
    }
    ,
    ac: (a,b)=>{
        Q.uniform1f(W(a), b)
    }
    ,
    $b: (a,b,c)=>{
        if (288 >= b)
            for (var d = ze[b], e = 0; e < b; ++e)
                d[e] = x[c + 4 * e >> 2];
        else
            d = x.subarray(c >> 2, c + 4 * b >> 2);
        Q.uniform1fv(W(a), d)
    }
    ,
    _b: (a,b)=>{
        Q.uniform1i(W(a), b)
    }
    ,
    Zb: (a,b,c)=>{
        if (288 >= b)
            for (var d = Ae[b], e = 0; e < b; ++e)
                d[e] = u[c + 4 * e >> 2];
        else
            d = u.subarray(c >> 2, c + 4 * b >> 2);
        Q.uniform1iv(W(a), d)
    }
    ,
    Yb: (a,b,c)=>{
        Q.uniform2f(W(a), b, c)
    }
    ,
    Xb: (a,b,c)=>{
        if (144 >= b)
            for (var d = ze[2 * b], e = 0; e < 2 * b; e += 2)
                d[e] = x[c + 4 * e >> 2],
                d[e + 1] = x[c + (4 * e + 4) >> 2];
        else
            d = x.subarray(c >> 2, c + 8 * b >> 2);
        Q.uniform2fv(W(a), d)
    }
    ,
    Wb: (a,b,c)=>{
        Q.uniform2i(W(a), b, c)
    }
    ,
    Tb: (a,b,c)=>{
        if (144 >= b)
            for (var d = Ae[2 * b], e = 0; e < 2 * b; e += 2)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2];
        else
            d = u.subarray(c >> 2, c + 8 * b >> 2);
        Q.uniform2iv(W(a), d)
    }
    ,
    Sb: (a,b,c,d)=>{
        Q.uniform3f(W(a), b, c, d)
    }
    ,
    Rb: (a,b,c)=>{
        if (96 >= b)
            for (var d = ze[3 * b], e = 0; e < 3 * b; e += 3)
                d[e] = x[c + 4 * e >> 2],
                d[e + 1] = x[c + (4 * e + 4) >> 2],
                d[e + 2] = x[c + (4 * e + 8) >> 2];
        else
            d = x.subarray(c >> 2, c + 12 * b >> 2);
        Q.uniform3fv(W(a), d)
    }
    ,
    Qb: (a,b,c,d)=>{
        Q.uniform3i(W(a), b, c, d)
    }
    ,
    Pb: (a,b,c)=>{
        if (96 >= b)
            for (var d = Ae[3 * b], e = 0; e < 3 * b; e += 3)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2],
                d[e + 2] = u[c + (4 * e + 8) >> 2];
        else
            d = u.subarray(c >> 2, c + 12 * b >> 2);
        Q.uniform3iv(W(a), d)
    }
    ,
    Ob: (a,b,c,d,e)=>{
        Q.uniform4f(W(a), b, c, d, e)
    }
    ,
    Nb: (a,b,c)=>{
        if (72 >= b) {
            var d = ze[4 * b]
              , e = x;
            c >>= 2;
            for (var f = 0; f < 4 * b; f += 4) {
                var g = c + f;
                d[f] = e[g];
                d[f + 1] = e[g + 1];
                d[f + 2] = e[g + 2];
                d[f + 3] = e[g + 3]
            }
        } else
            d = x.subarray(c >> 2, c + 16 * b >> 2);
        Q.uniform4fv(W(a), d)
    }
    ,
    Mb: (a,b,c,d,e)=>{
        Q.uniform4i(W(a), b, c, d, e)
    }
    ,
    Lb: (a,b,c)=>{
        if (72 >= b)
            for (var d = Ae[4 * b], e = 0; e < 4 * b; e += 4)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2],
                d[e + 2] = u[c + (4 * e + 8) >> 2],
                d[e + 3] = u[c + (4 * e + 12) >> 2];
        else
            d = u.subarray(c >> 2, c + 16 * b >> 2);
        Q.uniform4iv(W(a), d)
    }
    ,
    Kb: (a,b,c,d)=>{
        if (72 >= b)
            for (var e = ze[4 * b], f = 0; f < 4 * b; f += 4)
                e[f] = x[d + 4 * f >> 2],
                e[f + 1] = x[d + (4 * f + 4) >> 2],
                e[f + 2] = x[d + (4 * f + 8) >> 2],
                e[f + 3] = x[d + (4 * f + 12) >> 2];
        else
            e = x.subarray(d >> 2, d + 16 * b >> 2);
        Q.uniformMatrix2fv(W(a), !!c, e)
    }
    ,
    Ib: (a,b,c,d)=>{
        if (32 >= b)
            for (var e = ze[9 * b], f = 0; f < 9 * b; f += 9)
                e[f] = x[d + 4 * f >> 2],
                e[f + 1] = x[d + (4 * f + 4) >> 2],
                e[f + 2] = x[d + (4 * f + 8) >> 2],
                e[f + 3] = x[d + (4 * f + 12) >> 2],
                e[f + 4] = x[d + (4 * f + 16) >> 2],
                e[f + 5] = x[d + (4 * f + 20) >> 2],
                e[f + 6] = x[d + (4 * f + 24) >> 2],
                e[f + 7] = x[d + (4 * f + 28) >> 2],
                e[f + 8] = x[d + (4 * f + 32) >> 2];
        else
            e = x.subarray(d >> 2, d + 36 * b >> 2);
        Q.uniformMatrix3fv(W(a), !!c, e)
    }
    ,
    Hb: (a,b,c,d)=>{
        if (18 >= b) {
            var e = ze[16 * b]
              , f = x;
            d >>= 2;
            for (var g = 0; g < 16 * b; g += 16) {
                var l = d + g;
                e[g] = f[l];
                e[g + 1] = f[l + 1];
                e[g + 2] = f[l + 2];
                e[g + 3] = f[l + 3];
                e[g + 4] = f[l + 4];
                e[g + 5] = f[l + 5];
                e[g + 6] = f[l + 6];
                e[g + 7] = f[l + 7];
                e[g + 8] = f[l + 8];
                e[g + 9] = f[l + 9];
                e[g + 10] = f[l + 10];
                e[g + 11] = f[l + 11];
                e[g + 12] = f[l + 12];
                e[g + 13] = f[l + 13];
                e[g + 14] = f[l + 14];
                e[g + 15] = f[l + 15]
            }
        } else
            e = x.subarray(d >> 2, d + 64 * b >> 2);
        Q.uniformMatrix4fv(W(a), !!c, e)
    }
    ,
    Gb: a=>{
        a = O[a];
        Q.useProgram(a);
        Q.Eg = a
    }
    ,
    Fb: a=>{
        Q.validateProgram(O[a])
    }
    ,
    Eb: (a,b)=>Q.vertexAttrib1f(a, b),
    Db: (a,b)=>{
        Q.vertexAttrib1f(a, x[b >> 2])
    }
    ,
    Cb: (a,b,c)=>Q.vertexAttrib2f(a, b, c),
    Bb: (a,b)=>{
        Q.vertexAttrib2f(a, x[b >> 2], x[b + 4 >> 2])
    }
    ,
    Ab: (a,b,c,d)=>Q.vertexAttrib3f(a, b, c, d),
    zb: (a,b)=>{
        Q.vertexAttrib3f(a, x[b >> 2], x[b + 4 >> 2], x[b + 8 >> 2])
    }
    ,
    xb: (a,b,c,d,e)=>Q.vertexAttrib4f(a, b, c, d, e),
    wb: (a,b)=>{
        Q.vertexAttrib4f(a, x[b >> 2], x[b + 4 >> 2], x[b + 8 >> 2], x[b + 12 >> 2])
    }
    ,
    pa: (a,b)=>{
        Q.vertexAttribDivisor(a, b)
    }
    ,
    vb: (a,b,c,d,e,f)=>{
        Q.vertexAttribPointer(a, b, c, !!d, e, f)
    }
    ,
    ub: (a,b,c,d)=>Q.viewport(a, b, c, d),
    v: ()=>1,
    Ja: (a,b,c)=>Be(a, {
        $f: u[c >> 2],
        Uf: u[c + 4 >> 2],
        Lg: u[c + 8 >> 2],
        Ig: b,
        Hf: u[c + 12 >> 2],
        eg: u[c + 16 >> 2]
    }),
    T: (a,b)=>{
        a = S(a);
        return a ? a.requestPointerLock ? Gd() ? le(a) : b ? (Ed(le, 2, [a]),
        1) : -2 : -1 : -4
    }
    ,
    eb: ()=>{
        za("OOM")
    }
    ,
    w: Ce,
    z: (a,b,c)=>"undefined" == typeof onbeforeunload ? -1 : 1 !== c ? -5 : De(a, b),
    L: (a,b,c,d)=>Ee(a, b, c, d, 12, "blur"),
    i: fe,
    o: (a,b,c)=>{
        a = S(a);
        if (!a)
            return -4;
        a.style.width = b + "px";
        a.style.height = c + "px";
        return 0
    }
    ,
    M: (a,b,c,d)=>Ee(a, b, c, d, 13, "focus"),
    C: (a,b,c,d)=>{
        if (!Nd())
            return -1;
        a = S(a);
        if (!a)
            return -4;
        Fe(a, b, c, d, "webkitfullscreenchange");
        return Fe(a, b, c, d, "fullscreenchange")
    }
    ,
    n: (a,b,c)=>Ce() ? -1 : Ge(a, b, c, 26, "gamepadconnected"),
    m: (a,b,c)=>Ce() ? -1 : Ge(a, b, c, 27, "gamepaddisconnected"),
    F: (a,b,c,d)=>He(a, b, c, d, 2, "keydown"),
    D: (a,b,c,d)=>He(a, b, c, d, 1, "keypress"),
    E: (a,b,c,d)=>He(a, b, c, d, 3, "keyup"),
    R: (a,b,c,d)=>Je(a, b, c, d, 5, "mousedown"),
    P: (a,b,c,d)=>Je(a, b, c, d, 33, "mouseenter"),
    O: (a,b,c,d)=>Je(a, b, c, d, 34, "mouseleave"),
    S: (a,b,c,d)=>Je(a, b, c, d, 8, "mousemove"),
    Q: (a,b,c,d)=>Je(a, b, c, d, 6, "mouseup"),
    G: (a,b,c,d)=>{
        if (!document || !document.body || !(document.body.requestPointerLock || document.body.bf || document.body.yg || document.body.Tf))
            return -1;
        a = S(a);
        if (!a)
            return -4;
        Ke(a, b, c, d, "mozpointerlockchange");
        Ke(a, b, c, d, "webkitpointerlockchange");
        Ke(a, b, c, d, "mspointerlockchange");
        return Ke(a, b, c, d, "pointerlockchange")
    }
    ,
    B: (a,b,c,d)=>Le(a, b, c, d),
    H: (a,b,c,d)=>Me(a, b, c, d, 25, "touchcancel"),
    J: (a,b,c,d)=>Me(a, b, c, d, 23, "touchend"),
    I: (a,b,c,d)=>Me(a, b, c, d, 24, "touchmove"),
    K: (a,b,c,d)=>Me(a, b, c, d, 22, "touchstart"),
    A: (a,b,c)=>Ne(a, b, c),
    N: (a,b,c,d)=>(a = S(a)) ? "undefined" != typeof a.onwheel ? Oe(a, b, c, d) : -1 : -4,
    Ka: a=>document.title = a ? B(q, a) : "",
    u: a=>ff(b=>Fc(b, a)),
    lb: (a,b)=>{
        var c = 0;
        Re().forEach((d,e)=>{
            var f = b + c;
            e = v[a + 4 * e >> 2] = f;
            for (f = 0; f < d.length; ++f)
                m[e++] = d.charCodeAt(f);
            m[e] = 0;
            c += d.length + 1
        }
        );
        return 0
    }
    ,
    mb: (a,b)=>{
        var c = Re();
        v[a >> 2] = c.length;
        var d = 0;
        c.forEach(e=>d += e.length + 1);
        v[b >> 2] = d;
        return 0
    }
    ,
    g: Ec,
    l: function(a) {
        try {
            var b = Mb(a);
            Xb(b);
            return 0
        } catch (c) {
            if ("undefined" == typeof fc || "ErrnoError" !== c.name)
                throw c;
            return c.ff
        }
    },
    kb: function(a, b) {
        try {
            var c = Mb(a);
            m[b] = c.Ze ? 2 : J(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
            na[b + 2 >> 1] = 0;
            A = [0, (z = 0,
            1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
            u[b + 8 >> 2] = A[0];
            u[b + 12 >> 2] = A[1];
            A = [0, (z = 0,
            1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
            u[b + 16 >> 2] = A[0];
            u[b + 20 >> 2] = A[1];
            return 0
        } catch (d) {
            if ("undefined" == typeof fc || "ErrnoError" !== d.name)
                throw d;
            return d.ff
        }
    },
    ob: function(a, b, c, d) {
        try {
            a: {
                var e = Mb(a);
                a = b;
                for (var f, g = b = 0; g < c; g++) {
                    var l = v[a >> 2]
                      , n = v[a + 4 >> 2];
                    a += 8;
                    var p = e
                      , r = f
                      , t = m;
                    if (0 > n || 0 > r)
                        throw new G(28);
                    if (null === p.fd)
                        throw new G(8);
                    if (1 === (p.flags & 2097155))
                        throw new G(8);
                    if (J(p.node.mode))
                        throw new G(31);
                    if (!p.Ye.read)
                        throw new G(28);
                    var w = "undefined" != typeof r;
                    if (!w)
                        r = p.position;
                    else if (!p.seekable)
                        throw new G(70);
                    var D = p.Ye.read(p, t, l, n, r);
                    w || (p.position += D);
                    var E = D;
                    if (0 > E) {
                        var I = -1;
                        break a
                    }
                    b += E;
                    if (E < n)
                        break;
                    "undefined" != typeof f && (f += E)
                }
                I = b
            }
            v[d >> 2] = I;
            return 0
        } catch (ca) {
            if ("undefined" == typeof fc || "ErrnoError" !== ca.name)
                throw ca;
            return ca.ff
        }
    },
    $a: function(a, b, c, d, e) {
        b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
        try {
            if (isNaN(b))
                return 61;
            var f = Mb(a);
            Yb(f, b, d);
            A = [f.position >>> 0, (z = f.position,
            1 <= +Math.abs(z) ? 0 < z ? +Math.floor(z / 4294967296) >>> 0 : ~~+Math.ceil((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0)];
            u[e >> 2] = A[0];
            u[e + 4 >> 2] = A[1];
            f.uf && 0 === b && 0 === d && (f.uf = null);
            return 0
        } catch (g) {
            if ("undefined" == typeof fc || "ErrnoError" !== g.name)
                throw g;
            return g.ff
        }
    },
    nb: function(a, b, c, d) {
        try {
            a: {
                var e = Mb(a);
                a = b;
                for (var f, g = b = 0; g < c; g++) {
                    var l = v[a >> 2]
                      , n = v[a + 4 >> 2];
                    a += 8;
                    var p = Zb(e, m, l, n, f);
                    if (0 > p) {
                        var r = -1;
                        break a
                    }
                    b += p;
                    "undefined" != typeof f && (f += p)
                }
                r = b
            }
            v[d >> 2] = r;
            return 0
        } catch (t) {
            if ("undefined" == typeof fc || "ErrnoError" !== t.name)
                throw t;
            return t.ff
        }
    },
    f: rf,
    q: sf,
    k: tf,
    p: uf,
    ab: vf,
    U: wf,
    Ya: xf,
    Xa: yf,
    h: zf,
    d: Af,
    b: Bf,
    r: Cf,
    bb: Df
}
  , X = function() {
    function a(c) {
        X = c.exports;
        X = Ue();
        ka = X.Sd;
        c = ka.buffer;
        h.HEAP8 = m = new Int8Array(c);
        h.HEAP16 = na = new Int16Array(c);
        h.HEAPU8 = q = new Uint8Array(c);
        h.HEAPU16 = oa = new Uint16Array(c);
        h.HEAP32 = u = new Int32Array(c);
        h.HEAPU32 = v = new Uint32Array(c);
        h.HEAPF32 = x = new Float32Array(c);
        h.HEAPF64 = y = new Float64Array(c);
        qa.unshift(X.Td);
        ya("wasm-instantiate");
        return X
    }
    var b = {
        a: Ef
    };
    xa("wasm-instantiate");
    if (h.instantiateWasm)
        try {
            return h.instantiateWasm(b, a)
        } catch (c) {
            return k(`Module.instantiateWasm callback failed with error: ${c}`),
            !1
        }
    Ba ||= Aa("https://tdataserver.netlify.app/gdata/Q2F2ZSBTdG9yeQ==/index.wasm") ? "https://tdataserver.netlify.app/gdata/Q2F2ZSBTdG9yeQ==/index.wasm" : h.locateFile ? h.locateFile("https://tdataserver.netlify.app/gdata/Q2F2ZSBTdG9yeQ==/index.wasm", fa) : "https://tdataserver.netlify.app/gdata/Q2F2ZSBTdG9yeQ==/index.wasm";
    Fa(b, function(c) {
        a(c.instance)
    });
    return {}
}()
  , qf = a=>(qf = X.Ud)(a)
  , C = a=>(C = X.Vd)(a)
  , kf = a=>(kf = X.Wd)(a)
  , Ff = h._main = (a,b)=>(Ff = h._main = X.Xd)(a, b)
  , Z = (a,b)=>(Z = X.Zd)(a, b)
  , U = a=>(U = X._d)(a)
  , ce = a=>(ce = X.$d)(a)
  , T = ()=>(T = X.ae)()
  , dynCall_v = h.dynCall_v = a=>(dynCall_v = h.dynCall_v = X.ce)(a)
  , dynCall_vi = h.dynCall_vi = (a,b)=>(dynCall_vi = h.dynCall_vi = X.de)(a, b)
  , Gf = h.dynCall_ii = (a,b)=>(Gf = h.dynCall_ii = X.ee)(a, b)
  , V = h.dynCall_iiii = (a,b,c,d)=>(V = h.dynCall_iiii = X.fe)(a, b, c, d)
  , Hf = h.dynCall_viii = (a,b,c,d)=>(Hf = h.dynCall_viii = X.ge)(a, b, c, d)
  , dynCall_iii = h.dynCall_iii = (a,b,c)=>(dynCall_iii = h.dynCall_iii = X.he)(a, b, c)
  , If = h.dynCall_j = a=>(If = h.dynCall_j = X.ie)(a)
  , dynCall_vii = h.dynCall_vii = (a,b,c)=>(dynCall_vii = h.dynCall_vii = X.je)(a, b, c)
  , Jf = h.dynCall_viiii = (a,b,c,d,e)=>(Jf = h.dynCall_viiii = X.ke)(a, b, c, d, e)
  , Kf = h.dynCall_iiiiii = (a,b,c,d,e,f)=>(Kf = h.dynCall_iiiiii = X.le)(a, b, c, d, e, f);
h.dynCall_iiiiiiii = (a,b,c,d,e,f,g,l)=>(h.dynCall_iiiiiiii = X.me)(a, b, c, d, e, f, g, l);
var Lf = h.dynCall_iiiiiiiiii = (a,b,c,d,e,f,g,l,n,p)=>(Lf = h.dynCall_iiiiiiiiii = X.ne)(a, b, c, d, e, f, g, l, n, p)
  , Mf = h.dynCall_iiiii = (a,b,c,d,e)=>(Mf = h.dynCall_iiiii = X.oe)(a, b, c, d, e);
h.dynCall_iiiiiiiiiiiiiiff = (a,b,c,d,e,f,g,l,n,p,r,t,w,D,E,I)=>(h.dynCall_iiiiiiiiiiiiiiff = X.pe)(a, b, c, d, e, f, g, l, n, p, r, t, w, D, E, I);
var Nf = h.dynCall_jiji = (a,b,c,d,e)=>(Nf = h.dynCall_jiji = X.qe)(a, b, c, d, e);
h.dynCall_ji = (a,b)=>(h.dynCall_ji = X.re)(a, b);
h.dynCall_viiiii = (a,b,c,d,e,f)=>(h.dynCall_viiiii = X.se)(a, b, c, d, e, f);
h.dynCall_viiiiiiiii = (a,b,c,d,e,f,g,l,n,p)=>(h.dynCall_viiiiiiiii = X.te)(a, b, c, d, e, f, g, l, n, p);
h.dynCall_iiji = (a,b,c,d,e)=>(h.dynCall_iiji = X.ue)(a, b, c, d, e);
h.dynCall_iiiiiiiii = (a,b,c,d,e,f,g,l,n)=>(h.dynCall_iiiiiiiii = X.ve)(a, b, c, d, e, f, g, l, n);
h.dynCall_viiiiiii = (a,b,c,d,e,f,g,l)=>(h.dynCall_viiiiiii = X.we)(a, b, c, d, e, f, g, l);
h.dynCall_viiiiiiiiiii = (a,b,c,d,e,f,g,l,n,p,r,t)=>(h.dynCall_viiiiiiiiiii = X.xe)(a, b, c, d, e, f, g, l, n, p, r, t);
h.dynCall_iiiiiidiiff = (a,b,c,d,e,f,g,l,n,p,r)=>(h.dynCall_iiiiiidiiff = X.ye)(a, b, c, d, e, f, g, l, n, p, r);
h.dynCall_i = a=>(h.dynCall_i = X.ze)(a);
h.dynCall_vffff = (a,b,c,d,e)=>(h.dynCall_vffff = X.Ae)(a, b, c, d, e);
h.dynCall_vf = (a,b)=>(h.dynCall_vf = X.Be)(a, b);
h.dynCall_viiiiiiii = (a,b,c,d,e,f,g,l,n)=>(h.dynCall_viiiiiiii = X.Ce)(a, b, c, d, e, f, g, l, n);
h.dynCall_vff = (a,b,c)=>(h.dynCall_vff = X.De)(a, b, c);
h.dynCall_vfi = (a,b,c)=>(h.dynCall_vfi = X.Ee)(a, b, c);
h.dynCall_viif = (a,b,c,d)=>(h.dynCall_viif = X.Fe)(a, b, c, d);
h.dynCall_vif = (a,b,c)=>(h.dynCall_vif = X.Ge)(a, b, c);
h.dynCall_viff = (a,b,c,d)=>(h.dynCall_viff = X.He)(a, b, c, d);
h.dynCall_vifff = (a,b,c,d,e)=>(h.dynCall_vifff = X.Ie)(a, b, c, d, e);
h.dynCall_viffff = (a,b,c,d,e,f)=>(h.dynCall_viffff = X.Je)(a, b, c, d, e, f);
h.dynCall_viiiiii = (a,b,c,d,e,f,g)=>(h.dynCall_viiiiii = X.Ke)(a, b, c, d, e, f, g);
h.dynCall_iidiiii = (a,b,c,d,e,f,g)=>(h.dynCall_iidiiii = X.Le)(a, b, c, d, e, f, g);
h.dynCall_iid = (a,b,c)=>(h.dynCall_iid = X.Me)(a, b, c);
h.dynCall_di = (a,b)=>(h.dynCall_di = X.Ne)(a, b);
h.dynCall_viijii = (a,b,c,d,e,f,g)=>(h.dynCall_viijii = X.Oe)(a, b, c, d, e, f, g);
h.dynCall_iiiiiii = (a,b,c,d,e,f,g)=>(h.dynCall_iiiiiii = X.Pe)(a, b, c, d, e, f, g);
h.dynCall_iiiiij = (a,b,c,d,e,f,g)=>(h.dynCall_iiiiij = X.Qe)(a, b, c, d, e, f, g);
h.dynCall_iiiiid = (a,b,c,d,e,f)=>(h.dynCall_iiiiid = X.Re)(a, b, c, d, e, f);
h.dynCall_iiiiijj = (a,b,c,d,e,f,g,l,n)=>(h.dynCall_iiiiijj = X.Se)(a, b, c, d, e, f, g, l, n);
h.dynCall_iiiiiijj = (a,b,c,d,e,f,g,l,n,p)=>(h.dynCall_iiiiiijj = X.Te)(a, b, c, d, e, f, g, l, n, p);
var hf = a=>(hf = X.Ue)(a)
  , Ye = ()=>(Ye = X.Ve)()
  , gf = a=>(gf = X.We)(a)
  , jf = ()=>(jf = X.Xe)();
function Cf(a, b, c, d) {
    var e = T();
    try {
        Hf(a, b, c, d)
    } catch (f) {
        U(e);
        if (f !== f + 0)
            throw f;
        Z(1, 0)
    }
}
function sf(a, b, c) {
    var d = T();
    try {
        return dynCall_iii(a, b, c)
    } catch (e) {
        U(d);
        if (e !== e + 0)
            throw e;
        Z(1, 0)
    }
}
function Af(a, b) {
    var c = T();
    try {
        dynCall_vi(a, b)
    } catch (d) {
        U(c);
        if (d !== d + 0)
            throw d;
        Z(1, 0)
    }
}
function zf(a) {
    var b = T();
    try {
        dynCall_v(a)
    } catch (c) {
        U(b);
        if (c !== c + 0)
            throw c;
        Z(1, 0)
    }
}
function Bf(a, b, c) {
    var d = T();
    try {
        dynCall_vii(a, b, c)
    } catch (e) {
        U(d);
        if (e !== e + 0)
            throw e;
        Z(1, 0)
    }
}
function tf(a, b, c, d) {
    var e = T();
    try {
        return V(a, b, c, d)
    } catch (f) {
        U(e);
        if (f !== f + 0)
            throw f;
        Z(1, 0)
    }
}
function rf(a, b) {
    var c = T();
    try {
        return Gf(a, b)
    } catch (d) {
        U(c);
        if (d !== d + 0)
            throw d;
        Z(1, 0)
    }
}
function Df(a, b, c, d, e) {
    var f = T();
    try {
        Jf(a, b, c, d, e)
    } catch (g) {
        U(f);
        if (g !== g + 0)
            throw g;
        Z(1, 0)
    }
}
function uf(a, b, c, d, e) {
    var f = T();
    try {
        return Mf(a, b, c, d, e)
    } catch (g) {
        U(f);
        if (g !== g + 0)
            throw g;
        Z(1, 0)
    }
}
function wf(a, b, c, d, e, f, g, l, n, p) {
    var r = T();
    try {
        return Lf(a, b, c, d, e, f, g, l, n, p)
    } catch (t) {
        U(r);
        if (t !== t + 0)
            throw t;
        Z(1, 0)
    }
}
function vf(a, b, c, d, e, f) {
    var g = T();
    try {
        return Kf(a, b, c, d, e, f)
    } catch (l) {
        U(g);
        if (l !== l + 0)
            throw l;
        Z(1, 0)
    }
}
function xf(a) {
    var b = T();
    try {
        return If(a)
    } catch (c) {
        U(b);
        if (c !== c + 0)
            throw c;
        Z(1, 0)
    }
}
function yf(a, b, c, d, e) {
    var f = T();
    try {
        return Nf(a, b, c, d, e)
    } catch (g) {
        U(f);
        if (g !== g + 0)
            throw g;
        Z(1, 0)
    }
}
h.addRunDependency = xa;
h.removeRunDependency = ya;
h.FS_createPreloadedFile = wb;
h.FS_unlink = a=>Tb(a);
h.FS_createPath = ac;
h.FS_createDevice = cc;
h.FS_createDataFile = (a,b,c,d,e,f)=>{
    vb(a, b, c, d, e, f)
}
;
h.FS_createLazyFile = ec;
h.allocate = Ga;
var Of;
wa = function Pf() {
    Of || Qf();
    Of || (wa = Pf)
}
;
function Rf(a=[]) {
    var b = Ff;
    a.unshift(da);
    var c = a.length
      , d = ce(4 * (c + 1))
      , e = d;
    a.forEach(g=>{
        v[e >> 2] = de(g);
        e += 4
    }
    );
    v[e >> 2] = 0;
    try {
        var f = b(c, d);
        Ec(f, !0)
    } catch (g) {
        Bc(g)
    }
}
function Qf() {
    var a = ba;
    function b() {
        if (!Of && (Of = !0,
        h.calledRun = !0,
        !la)) {
            h.noFSInit || $b || ($b = !0,
            h.stdin = h.stdin,
            h.stdout = h.stdout,
            h.stderr = h.stderr,
            h.stdin ? cc("/dev", "stdin", h.stdin) : Sb("/dev/tty", "/dev/stdin"),
            h.stdout ? cc("/dev", "stdout", null, h.stdout) : Sb("/dev/tty", "/dev/stdout"),
            h.stderr ? cc("/dev", "stderr", null, h.stderr) : Sb("/dev/tty1", "/dev/stderr"),
            Vb("/dev/stdin", 0),
            Vb("/dev/stdout", 1),
            Vb("/dev/stderr", 1));
            Db = !1;
            Oa(qa);
            Oa(ra);
            h.onRuntimeInitialized?.();
            Sf && Rf(a);
            if (h.postRun)
                for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length; ) {
                    var c = h.postRun.shift();
                    sa.unshift(c)
                }
            Oa(sa)
        }
    }
    if (!(0 < ua)) {
        if (h.preRun)
            for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length; )
                ta();
        Oa(pa);
        0 < ua || (h.setStatus ? (h.setStatus("Running..."),
        setTimeout(function() {
            setTimeout(function() {
                h.setStatus("")
            }, 1);
            b()
        }, 1)) : b())
    }
}
if (h.preInit)
    for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length; )
        h.preInit.pop()();
var Sf = !0;
h.noInitialRun && (Sf = !1);
Qf();
