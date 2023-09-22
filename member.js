function skillMember() {
    var skill = document.getElementById("skill").value;
    var member = document.getElementById("member").value;
    var skillMember = document.getElementById("skillMember");
    var skillMemberValue = skill + " " + member;
    skillMember.innerHTML = skillMemberValue;
}
