import React from "react";

const ResourceList = ({ resources }: { resources: any[] }) => {
  return (
    <div className="mt-2">
      {resources.map((r, i) => {
        const fullAddr = [r.address, r.city, r.state, r.zip]
          .filter(Boolean)
          .join(", ");

        const mapsUrl =
          fullAddr.trim().length > 0
            ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddr)}`
            : null;

        return (
          <div key={i} className="bg-white rounded shadow mb-2">
            <div className="p-2">
              <h6 className="font-semibold mb-1 text-base">{r.name}</h6>

              {r.description && <p className="text-sm mb-1">{r.description}</p>}

              {fullAddr && (
                <p className="text-sm mb-1">
                  {fullAddr}
                  {mapsUrl && (
                    <>
                      {" "}
                      •{" "}
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        Open in Google Maps
                      </a>
                    </>
                  )}
                </p>
              )}

              {r.phone && <p className="text-sm mb-1">📞 {r.phone}</p>}

              {r.website && (
                <a
                  href={r.website.startsWith("http") ? r.website : `https://${r.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResourceList;
