# Philippines.JSON

A JSON file that contains the regions, provinces, cities/municipalities, and barangays in the Philippines.

_a modified version of [regions.js](https://github.com/josephmangmang/philippines_rpcmb/blob/main/assets/regions.json) in [josephmangmang/philippines_rpcmb](https://github.com/josephmangmang/philippines_rpcmb)_

### Hierarchy and Structure

1. **File**: `philippines.json`
    - Contains a json array of objects representing the regions of the Philippines.

        ```js
        const PH_JSON = JSON.parse(
            fs.readFileSync(
                'philippines.json', { encoding: 'utf8' }
            )
        )
        ```

2. **Region**
    - `id`: string - Region code
    - `n`: string - Region name
    - `p`: array - Contains the provinces of the region.

        Example:

        ```js
        console.log(PH_JSON[2]);
        ```

        ```js
        {
            id: '03',
            n: 'Central Luzon',
            p: [
                { n: 'AURORA', c: [Array] },
                { n: 'BATAAN', c: [Array] },
                { n: 'BULACAN', c: [Array] },
                { n: 'NUEVA ECIJA', c: [Array] },
                { n: 'PAMPANGA', c: [Array] },
                { n: 'TARLAC', c: [Array] },
                { n: 'ZAMBALES', c: [Array] }
            ]
        }
        ```

3. **Province**
    - `n`: string - Province name
    - `c`: array - Contains the cities/municipalities of the province.

        Example:

        ```js
        console.log(PH_JSON[3].p[4]);
        ```

        ```js
        {
            n: 'RIZAL',
            c: [
                { n: 'ANGONO', b: [Array] },
                { n: 'BARAS', b: [Array] },
                { n: 'BINANGONAN', b: [Array] },
                { n: 'CAINTA', b: [Array] },
                { n: 'CARDONA', b: [Array] },
                { n: 'CITY OF ANTIPOLO', b: [Array] },
                { n: 'JALA-JALA', b: [Array] },
                { n: 'MORONG', b: [Array] },
                { n: 'PILILLA', b: [Array] },
                { n: 'RODRIGUEZ (MONTALBAN)', b: [Array] },
                { n: 'SAN MATEO', b: [Array] },
                { n: 'TANAY', b: [Array] },
                { n: 'TAYTAY', b: [Array] },
                { n: 'TERESA', b: [Array] }
            ]
        }
        ```

4. **City/Municipality**
    - `n`: string - City/Municipality name
    - `b`: array of strings - Barangays in the city/municipality.

        Example:

        ```js
        console.log(PH_JSON[16].p[3].c[3]);
        ```

        ```js
        {
            n: 'NAVOTAS CITY',
            b: [
                'BAGUMBAYAN NORTH',
                'BAGUMBAYAN SOUTH',
                'BANGCULASI',
                'DAANGHARI',
                'NAVOTAS EAST',
                'NAVOTAS WEST',
                'NBBS DAGAT-DAGATAN',
                'NBBS KAUNLARAN',
                'NBBS PROPER',
                'NORTH BAY BLVD., NORTH',
                'SAN JOSE (POB.)',
                'SAN RAFAEL VILLAGE',
                'SAN ROQUE',
                'SIPAC-ALMACEN',
                'TANGOS NORTH',
                'TANGOS SOUTH',
                'TANZA 1',
                'TANZA 2'
            ]
        }
        ```

5. **Barangay**
    - Array of strings representing barangay names.

        Example:

        ```js
        console.log(PH_JSON[7].p[0].c[5].b[6]);
        ```

        ```js
        CABAD
        ```
