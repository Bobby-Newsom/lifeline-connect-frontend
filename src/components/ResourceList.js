import React from "react";

const ResourceList = ({ resources }) => {
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
          <div key={i} className="card mb-2">
            <div className="card-body p-2">
              <h6 className="card-title mb-1">{r.name}</h6>

              {r.description && <p className="small mb-1">{r.description}</p>}

              {fullAddr && (
                <p className="small mb-1">
                  {fullAddr}
                  {mapsUrl && (
                    <>
                      {" "}
                      •{" "}
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-primary"
                      >
                        Open in Google Maps
                      </a>
                    </>
                  )}
                </p>
              )}

              {r.phone && <p className="small mb-1">📞 {r.phone}</p>}

              {r.website && (
                <a
                  href={r.website.startsWith("http") ? r.website : `https://${r.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="small"
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
