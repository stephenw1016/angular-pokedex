import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export default class PokemonService {

  private list: Observable<Array<object>>;
  private samplePokemon: any = {
    "forms": [
      {
        "url": "https://pokeapi.co/api/v2/pokemon-form/11/",
        "name": "metapod"
      }
    ],
    "abilities": [
      {
        "slot": 1,
        "is_hidden": false,
        "ability": {
          "url": "https://pokeapi.co/api/v2/ability/61/",
          "name": "shed-skin"
        }
      }
    ],
    "stats": [
      {
        "stat": {
          "url": "https://pokeapi.co/api/v2/stat/6/",
          "name": "speed"
        },
        "effort": 0,
        "base_stat": 30
      },
      {
        "stat": {
          "url": "https://pokeapi.co/api/v2/stat/5/",
          "name": "special-defense"
        },
        "effort": 0,
        "base_stat": 25
      },
      {
        "stat": {
          "url": "https://pokeapi.co/api/v2/stat/4/",
          "name": "special-attack"
        },
        "effort": 0,
        "base_stat": 25
      },
      {
        "stat": {
          "url": "https://pokeapi.co/api/v2/stat/3/",
          "name": "defense"
        },
        "effort": 2,
        "base_stat": 55
      },
      {
        "stat": {
          "url": "https://pokeapi.co/api/v2/stat/2/",
          "name": "attack"
        },
        "effort": 0,
        "base_stat": 20
      },
      {
        "stat": {
          "url": "https://pokeapi.co/api/v2/stat/1/",
          "name": "hp"
        },
        "effort": 0,
        "base_stat": 50
      }
    ],
    "name": "metapod",
    "weight": 99,
    "moves": [
      {
        "version_group_details": [
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/10/",
              "name": "heartgold-soulsilver"
            }
          }
        ],
        "move": {
          "url": "https://pokeapi.co/api/v2/move/81/",
          "name": "string-shot"
        }
      },
      {
        "version_group_details": [
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/16/",
              "name": "omega-ruby-alpha-sapphire"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/16/",
              "name": "omega-ruby-alpha-sapphire"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/15/",
              "name": "x-y"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/15/",
              "name": "x-y"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/14/",
              "name": "black-2-white-2"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/14/",
              "name": "black-2-white-2"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/13/",
              "name": "xd"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/13/",
              "name": "xd"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/12/",
              "name": "colosseum"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/12/",
              "name": "colosseum"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/11/",
              "name": "black-white"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/11/",
              "name": "black-white"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/10/",
              "name": "heartgold-soulsilver"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/10/",
              "name": "heartgold-soulsilver"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/9/",
              "name": "platinum"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/9/",
              "name": "platinum"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/8/",
              "name": "diamond-pearl"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/8/",
              "name": "diamond-pearl"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/7/",
              "name": "firered-leafgreen"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/7/",
              "name": "firered-leafgreen"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/6/",
              "name": "emerald"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/6/",
              "name": "emerald"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/5/",
              "name": "ruby-sapphire"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/5/",
              "name": "ruby-sapphire"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/4/",
              "name": "crystal"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/4/",
              "name": "crystal"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/3/",
              "name": "gold-silver"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/3/",
              "name": "gold-silver"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 7,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/2/",
              "name": "yellow"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/2/",
              "name": "yellow"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
              "name": "level-up"
            },
            "level_learned_at": 1,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/1/",
              "name": "red-blue"
            }
          }
        ],
        "move": {
          "url": "https://pokeapi.co/api/v2/move/106/",
          "name": "harden"
        }
      },
      {
        "version_group_details": [
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/16/",
              "name": "omega-ruby-alpha-sapphire"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/14/",
              "name": "black-2-white-2"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/10/",
              "name": "heartgold-soulsilver"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/9/",
              "name": "platinum"
            }
          }
        ],
        "move": {
          "url": "https://pokeapi.co/api/v2/move/334/",
          "name": "iron-defense"
        }
      },
      {
        "version_group_details": [
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/16/",
              "name": "omega-ruby-alpha-sapphire"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/14/",
              "name": "black-2-white-2"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/10/",
              "name": "heartgold-soulsilver"
            }
          }
        ],
        "move": {
          "url": "https://pokeapi.co/api/v2/move/450/",
          "name": "bug-bite"
        }
      },
      {
        "version_group_details": [
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/16/",
              "name": "omega-ruby-alpha-sapphire"
            }
          },
          {
            "move_learn_method": {
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
              "name": "tutor"
            },
            "level_learned_at": 0,
            "version_group": {
              "url": "https://pokeapi.co/api/v2/version-group/14/",
              "name": "black-2-white-2"
            }
          }
        ],
        "move": {
          "url": "https://pokeapi.co/api/v2/move/527/",
          "name": "electroweb"
        }
      }
    ],
    "sprites": {
      "back_female": null,
      "back_shiny_female": null,
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
      "front_female": null,
      "front_shiny_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/11.png",
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png"
    },
    "held_items": [],
    "location_area_encounters": "/api/v2/pokemon/11/encounters",
    "height": 7,
    "is_default": true,
    "species": {
      "url": "https://pokeapi.co/api/v2/pokemon-species/11/",
      "name": "metapod"
    },
    "id": 11,
    "order": 15,
    "game_indices": [
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/22/",
          "name": "white-2"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/21/",
          "name": "black-2"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/18/",
          "name": "white"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/17/",
          "name": "black"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/16/",
          "name": "soulsilver"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/15/",
          "name": "heartgold"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/14/",
          "name": "platinum"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/13/",
          "name": "pearl"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/12/",
          "name": "diamond"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/11/",
          "name": "leafgreen"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/10/",
          "name": "firered"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/9/",
          "name": "emerald"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/8/",
          "name": "sapphire"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/7/",
          "name": "ruby"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/6/",
          "name": "crystal"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/5/",
          "name": "silver"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/4/",
          "name": "gold"
        },
        "game_index": 11
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/3/",
          "name": "yellow"
        },
        "game_index": 124
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/2/",
          "name": "blue"
        },
        "game_index": 124
      },
      {
        "version": {
          "url": "https://pokeapi.co/api/v2/version/1/",
          "name": "red"
        },
        "game_index": 124
      }
    ],
    "base_experience": 72,
    "types": [
      {
        "slot": 1,
        "type": {
          "url": "https://pokeapi.co/api/v2/type/7/",
          "name": "bug"
        }
      }
    ]
  };

  constructor(private http: Http) {}

  getPokemonList() {
    if (!this.list) {
      this.list = this.http.get('https://pokeapi.co/api/v2/pokemon')
        .map(res => {
          let data = res.json().results.map((item: any) => {
            let ids = item.url.match(/.*\/(\d+)\//);
            item.id = ids[1];
            return item;
          });

          console.info('getPokemonList():', data);
          return data;
        })
        .publishReplay(1)
        .refCount();
    }

    return this.list;
  }

  getPokemon(id: number) {
    this.samplePokemon.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${id}.png`;
    return Observable.of(this.samplePokemon);
    // return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //   .map(res => {
    //     let data = res.json();
    //
    //     console.info(`getPokemon(${id}):`, JSON.stringify(data, null, '  '));
    //     return data;
    //   });
  }
}
