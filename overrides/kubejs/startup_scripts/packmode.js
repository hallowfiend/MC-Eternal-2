const PackModeAPI = Java.loadClass(
  "com.teamacronymcoders.packmode.api.PackModeAPI"
)

global.PackMode = {
  get() {
    return PackModeAPI.getInstance().getPackMode()
  },

  set(mode) {
    PackModeAPI.getInstance().setPackMode(mode)
  },

  valid() {
    return PackModeAPI.getInstance().getValidPackModes()
  }
}