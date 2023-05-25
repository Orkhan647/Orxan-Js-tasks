const domains = [
  {
    id: 0,
    name: "baki.az",
    owner: {
      name: "ali",
      age: 17,
      gender: "man",
      job: "fe",
    },
  },
  {
    id: 1,
    name: "fe.az",
    owner: {
      name: "aydan",
      age: 15,
      gender: "woman",
      job: "be",
    },
  },
  {
    id: 2,
    name: "fs.com",
    owner: {
      name: "tesla",
      age: 15,
      gender: "woman",
      job: "fs",
    },
  },
  {
    id: 3,
    name: "zoo.com",
    owner: {
      name: "zabilia",
      age: 20,
      gender: "man",
      job: "qa",
    },
  },
  {
    id: 4,
    name: "zatachivak.com",
    owner: {
      name: "pakitotunak",
      age: 28,
      gender: "man",
      job: "designer",
    },
  },
];
let domainsWithN = domains.filter((domain) => {
  const selfNameContainsN = domain.name.includes("n");
  const ownerNameContainsN = domain.owner.name.includes("n");
  return selfNameContainsN || ownerNameContainsN;
});

console.log(domainsWithN);
