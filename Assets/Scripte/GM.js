#pragma strict
var theSkinLeft : Texture;
var theSkinRight : Texture;
function OnGUI () {
if (!theSkinLeft) {
			Debug.LogError("Please assign a texture on the inspector");
			return;
		}
	if (GUI.Button(Rect(0,10,50,50),theSkinLeft))
			Debug.Log("Clicked the left");	
if (!theSkinRight) {
			Debug.LogError("Please assign a texture on the inspector");
			return;
		}
	if (GUI.Button(Rect(Screen.width - 50,10,50,50),theSkinRight))
			Debug.Log("Clicked the right");	
}


