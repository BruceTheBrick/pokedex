class TypeController {
  constructor() {
    this.types = [
      {
        id: 1,
        name: "normal",
      },
      {
        id: 2,
        name: "fire",
      },
      {
        id: 3,
        name: "water",
      },
      {
        id: 4,
        name: "grass",
      },
      {
        id: 5,
        name: "electric",
      },
      {
        id: 6,
        name: "ice",
      },
      {
        id: 7,
        name: "fighting",
      },
      {
        id: 8,
        name: "poison",
      },
      {
        id: 9,
        name: "ground",
      },
      {
        id: 10,
        name: "flying",
      },
      {
        id: 11,
        name: "psychic",
      },
      {
        id: 12,
        name: "bug",
      },
      {
        id: 13,
        name: "rock",
      },
      {
        id: 14,
        name: "ghost",
      },
      {
        id: 15,
        name: "dark",
      },
      {
        id: 16,
        name: "dragon",
      },
      {
        id: 17,
        name: "steel",
      },
      {
        id: 18,
        name: "fairy",
      },
    ];
  }

  getTypeByName(name) {
    return this.types[
      this.types.findIndex((type) => {
        return type.name === name;
      })
    ];
  }
}

const typeController = new TypeController();

export const typeByName = (name) => {
  return typeController.getTypeByName(name);
};
