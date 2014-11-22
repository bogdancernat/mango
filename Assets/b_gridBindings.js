#pragma strict
//var layers = new Array() [
//	['1','2','3','4','5','6','7','8','9','0'],
//	['q','w','e','r','t','y','u','i','o','p'],
//	['a','s','d','f','g','h','j','k','l',';'],
//	['z','x','c','v','b','n','m',',','.','/']
//];
var targetKeys = ['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',';','z','x','c','v','b','n','m',',','.','/'];

function Start () {

}

function Update () {

}

function OnGUI() {
	var e : Event = Event.current;
	if (e.isKey && System.Array.IndexOf(targetKeys, System.Convert.ToString(e.character)) >= 0) {
		Debug.Log("Detected key code: " + e.character);
		Debug.Log(Screen.height);
	}
	
	
}