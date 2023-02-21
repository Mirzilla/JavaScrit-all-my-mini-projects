YuraJbj = {
    FamilyMembers: ["Irina", "Michael", "Yura"],
};
const countElementsObj = Object(YuraJbj.FamilyMembers).length;
console.log(
    YuraJbj.FamilyMembers[2] + " has " + countElementsObj,
    "family members first is",
    YuraJbj.FamilyMembers[0]
);
