var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.83329539780083,
        "pitch": 0.17965239704158265,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 2.9342685036974085,
          "pitch": 0.3765378771753145,
          "rotation": 0,
          "target": "1-garagem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garagem",
      "name": "Garagem",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0676469994813207,
        "pitch": 0.22101376552222618,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.5810291525812579,
          "pitch": 0.5139355963791452,
          "rotation": 0,
          "target": "6-rea-1"
        },
        {
          "yaw": -0.07714947845922104,
          "pitch": 0.30343122792436716,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -2.5479786679491934,
          "pitch": 0.5815713678831429,
          "rotation": 0,
          "target": "2-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-recepo",
      "name": "Recepção",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0297406910909075,
        "pitch": 0.4559738557074482,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.1079916576305617,
          "pitch": 0.35919848355049666,
          "rotation": 0,
          "target": "4-corredor-2"
        },
        {
          "yaw": -2.2802071413679865,
          "pitch": 0.42689615563868166,
          "rotation": 5.497787143782138,
          "target": "3-corredor-1"
        },
        {
          "yaw": 1.0907281059849474,
          "pitch": 0.3766347846732252,
          "rotation": 0,
          "target": "1-garagem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corredor-1",
      "name": "Corredor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.1363853491637439,
        "pitch": 0.1286315491365606,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -2.793773306863317,
          "pitch": 0.4371468257715403,
          "rotation": 0.7853981633974483,
          "target": "2-recepo"
        },
        {
          "yaw": -0.2831577586373708,
          "pitch": 0.20036601521535147,
          "rotation": 5.497787143782138,
          "target": "5-escada-de-acesso-1-andar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corredor-2",
      "name": "Corredor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.04577493452466541,
        "pitch": -0.05648196548803952,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -3.010676085082398,
          "pitch": 0.3839759326194958,
          "rotation": 0.7853981633974483,
          "target": "1-garagem"
        },
        {
          "yaw": 2.7528319793288976,
          "pitch": 0.49062785932348874,
          "rotation": 5.497787143782138,
          "target": "2-recepo"
        },
        {
          "yaw": 0.2089845214628312,
          "pitch": 0.23146234398353727,
          "rotation": 0.7853981633974483,
          "target": "5-escada-de-acesso-1-andar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-escada-de-acesso-1-andar",
      "name": "Escada de Acesso 1º andar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.920498126810786,
        "pitch": 0.22741470470603176,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.249287729132779,
          "pitch": 0.4960583097878768,
          "rotation": 0,
          "target": "3-corredor-1"
        },
        {
          "yaw": -2.6775444791372554,
          "pitch": 0.4855547800488118,
          "rotation": 0,
          "target": "4-corredor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-rea-1",
      "name": "Área 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.915833692125174,
        "pitch": 0.04836666091053132,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.6237010105088583,
          "pitch": 0.24797407822766182,
          "rotation": 0,
          "target": "7-rea-2"
        },
        {
          "yaw": -1.6826173887557054,
          "pitch": 0.3083192238170618,
          "rotation": 0,
          "target": "1-garagem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-rea-2",
      "name": "Área 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.081705263619935,
        "pitch": 0.17930185282530786,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.4504279953783445,
          "pitch": 0.47843603294759873,
          "rotation": 0,
          "target": "8-entrada-do-plenrio"
        },
        {
          "yaw": -1.9845540391559418,
          "pitch": 0.27026003721977965,
          "rotation": 0,
          "target": "6-rea-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-entrada-do-plenrio",
      "name": "Entrada do Plenário",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.026412172290655178,
        "pitch": -0.22652541245207125,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.267603224368596,
          "pitch": 0.3161303996400182,
          "rotation": 0,
          "target": "7-rea-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Câmara Municipal de Canudos",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
