if(NOT TARGET shopify_react-native-skia::rnskia)
add_library(shopify_react-native-skia::rnskia SHARED IMPORTED)
set_target_properties(shopify_react-native-skia::rnskia PROPERTIES
    IMPORTED_LOCATION "C:/Users/jonny/Desktop/Jonny AI/Clients/New folder/Insydetradar/node_modules/@shopify/react-native-skia/android/build/intermediates/cxx/RelWithDebInfo/96u23112/obj/armeabi-v7a/librnskia.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/jonny/Desktop/Jonny AI/Clients/New folder/Insydetradar/node_modules/@shopify/react-native-skia/android/build/headers/rnskia"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

