# Current System Arch
```mermaid
graph LR
A[Apple Watch] -- Bluetooth --> B[iPhone] -- WiFi --> C[Android]
C[Android] -- 4G Sim --> D[Cloud]
D[Cloud] --> E[dwd bucket]
D[Cloud] --> F[Wigle Server]
E[dwd bucket] --> G[Grafana]
F[Wigle Server] --> H[KML File]
H[KML File] --> i[Google Earth]

```